import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Authentication } from '../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Login = () => {

    const [error, setError] = useState(false);
    const navigation = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target[0].value;
        const password = event.target[1].value;

        try{
            await signInWithEmailAndPassword(Authentication, email, password);
            navigation("/")
        }catch(error) {
            setError(true);
        }
    };

    return (
        <>
            <section className="login_card">
                <div className="login_container">
                    <h1 name="ChatrBox" type="logo">ChatrB<FontAwesomeIcon icon={faArrowUpRightFromSquare} bounce />X</h1>
                    <p>Welcome to ChatrBox</p>
                    <p>Log In</p>
                    <form onSubmit={handleSubmit} className="login_form">
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
                    {error && <span>Invalid Email or Password...Try Again</span>}
                    <p>Don't have an account? <Link to="/Registration">Sign up!</Link></p>
                </div>
            </section>
        </>
    )
}

export default Login;
