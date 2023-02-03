import SideBar from '../Components/SideBar';
import Chats from '../Components/Chats';

const Chat = () => {

    return(
        <>
            <div className="chat_card">
                <div className="chat_container">
                    <SideBar />
                    <Chats />
                </div>
            </div>
        </>    
    )
}

export default Chat;