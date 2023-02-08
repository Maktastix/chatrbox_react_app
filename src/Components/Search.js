import { useContext, useState } from "react";
import { collection, query, where, getDoc, getDocs, doc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { dbRef } from "../Firebase";
import { AuthContext } from "../Context/AuthContext";

const Search = () => {
    
    const [user, setUser] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState(false);
    
    const {currentUser} = useContext(AuthContext);

    const handleSearch = async () => {
        const q = query(collection(dbRef, "users"),where("displayName", "==", username));

        try{
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
            });
        }catch(error){
            setError(true);
        }
    };

    const handleKeyDown = (event) => {
        event.code === "Enter" && handleSearch();
    }

    const handleChange = (event) => {
        setUsername(event.target.value);
    }

    const handleSelect = async () => {
        const combineID = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;

        try{
            const response = await getDoc(doc(dbRef, "chats", combineID));

            if(!response.exists()){
                await setDoc(doc(dbRef, "chats", combineID), { messages: [] });

                await updateDoc(doc(dbRef, "userChats", currentUser.uid), {
                    [combineID + ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL
                    },
                    [combineID + ".date"]: serverTimestamp()
                });

                await updateDoc(doc(dbRef, "userChats", user.uid), {
                    [combineID + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL
                    },
                    [combineID + ".date"]: serverTimestamp()
                });
            }
        }catch(error){
            setUser(null);
            setUsername("");
        }
    }

    return (
        <>
            <div className="search">
                <div className="search_input">
                    <input
                        onKeyDown={handleKeyDown}
                        onChange={handleChange}
                        value={username}
                        type="text"
                        id="search"
                        placeholder="Search Users" />
                </div>
                {error && <span>User not found...</span>}
                {user && (<div className="userchat_search" onClick={handleSelect}>
                    <img src={user.photoURL} alt="" />
                    <div className="userchat_info">
                        <span>{user.displayName}</span>
                    </div>
                </div>)}
            </div>

        </>
    )
}

export default Search;