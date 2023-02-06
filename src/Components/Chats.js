import Photo from '../assets/anon_mask.jpg';

const Chats = () => {
    return (
        <>
            <div className="chats">
                <div className="search_input">
                    <input type="text" id="search" placeholder="Search Users" />
                </div>
                <div className="user_chats">
                    <img src={Photo} alt="" />
                    <div className="user_info">
                        <p>Daniel Makinde</p>
                        <div className="chat_content">
                            <p>Hello, how are you?</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chats;