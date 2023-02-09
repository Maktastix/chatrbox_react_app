import { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { Authentication } from '../Firebase';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { ChatContext } from '../Context/ChatContext';

const NavBar = () => {

    const handleLogout = () => {
        signOut(Authentication);
    }

    const { data } = useContext(ChatContext);  

    return (
        <>
            <div className="nav_bar">
                <h1 name="ChatrBox" type="logo">ChatrB<FontAwesomeIcon icon={faArrowUpRightFromSquare} />X</h1>
                <span className="selected_user">{data.user.displayName}</span>
                <div className="account">
                    <button onClick={handleLogout}>Log Out</button>
                </div>
            </div>
        </>
    )
}

export default NavBar;