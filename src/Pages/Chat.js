// import {useState, useEffect } from 'react';

import SideBar from '../Components/SideBar';
import NavBar from '../Components/NavBar';
import FormInput from '../Components/FormInput';
import Messages from '../Components/Messages';

const Chat = () => {
    

    return(
        <>
            <section className="chat_card">
                <div className="navbar_container">
                    <NavBar />
                </div>
                <div className="chat_container">
                    <div className="sidebar_container">
                        <SideBar />
                    </div>
                    <div className="message_container">
                        <Messages />
                        <FormInput />
                    </div>
                </div>
            </section>
        </>    
    )
}

export default Chat;