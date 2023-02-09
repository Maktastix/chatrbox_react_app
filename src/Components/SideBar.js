import Search from './Search';
import Chats from './Chats';

const SideBar = () => {
    return (
        <>
            <div className="side_bar">
                <Search />
                <div className="chat_scroll">
                    <Chats />
                </div>
                
            </div>
            
        </>
    )
}

export default SideBar;