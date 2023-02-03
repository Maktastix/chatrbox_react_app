import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <>
            <div className="nav_bar">
                <h1 name="ChatrBox" type="logo">ChatrB<FontAwesomeIcon icon={faArrowUpRightFromSquare} />X</h1>
                <div className="account">
                    <p>"Display Name"</p>
                    <button>Log Out</button>
                </div>
            </div>
        </>
    )
}

export default NavBar;