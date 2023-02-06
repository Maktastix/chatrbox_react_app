import { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { Authentication } from '../Firebase';
import { AuthContext } from '../Context/AuthContext';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {

    const handleLogout = () => {
        signOut(Authentication);
    }

    const currentUser = useContext(AuthContext);

    return (
        <>
            <div className="nav_bar">
                <h1 name="ChatrBox" type="logo">ChatrB<FontAwesomeIcon icon={faArrowUpRightFromSquare} />X</h1>
                <div className="account">
                    <img src={currentUser.photoURL} alt="" />
                    <span>{currentUser.displayName}</span>
                    <button onClick={handleLogout}>Log Out</button>
                </div>
            </div>
        </>
    )
}

export default NavBar;