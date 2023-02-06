import Photo from '../assets/pain_smith.jpg';

const Message = () => {
    return (
        <>
            <div className="message user">
                <div className="message_info">
                    <img src={Photo} alt="" />
                    <span>Just Now</span>
                </div>
                <div className="message_content">
                    <p>Hello</p>
                </div>
            </div>
        </>
    )
}

export default Message;