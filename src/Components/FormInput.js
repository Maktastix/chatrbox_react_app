import { AuthContext } from '../Context/AuthContext';
import { ChatContext } from '../Context/ChatContext';
import { useContext, useState } from 'react';
import { dbRef } from '../Firebase';
import { updateDoc, doc, arrayUnion, Timestamp, serverTimestamp } from '@firebase/firestore';
import { v4 as uuid } from "uuid";


const FormInput = () => {

    const [text, setText] = useState("");

    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const handleSend = async () => {
        await updateDoc(doc(dbRef, "chats", data.chatId), {
            messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
            })
        });

        await updateDoc(doc(dbRef, "userChats", currentUser.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });
    
        await updateDoc(doc(dbRef, "userChats", data.user.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });
    
        setText("");
    };


    return (
        <>
            <div className="form_input">
                <div className="message_input">
                    <label htmlFor="message"></label>
                    <textarea 
                        id="message" 
                        placeholder="Type Message..." 
                        onChange={(e) =>setText(e.target.value)}
                        value={text}
                        required 
                    />
                    <button onClick={handleSend}>Send</button>
                </div>
            </div>
        </>
    )
}

export default FormInput;