import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <>
            <div className="login_card">
                <div className="login_container">
                    <h1 name="ChatrBox" type="logo">ChatrB<FontAwesomeIcon icon={faArrowUpRightFromSquare} bounce />X</h1>
                    <p>Welcome to ChatrBox</p>
                    <p>Log In</p>
                    <form className="login_form">
                        <div className="form_input">
                            <label htmlFor="email"></label>
                            <input type="email" id="email" placeholder="Enter Email" required></input>
                        </div>
                        <div className="form_input">
                            <label htmlFor="password"></label>
                            <input type="password" id="password" placeholder="Enter Password" required></input>
                        </div>
                        <div className="form_button">
                            <button type="submit">Log In</button>
                        </div>
                    </form>
                    <p>Don't have an account? <Link to="/Registration">Sign up!</Link></p>
                </div>
            </div>
        </>
    )
}

export default Login;
