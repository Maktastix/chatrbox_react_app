import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Avatar from '../assets/icons8_add_image.png';

const Registration = () => {
    
    return(
        <>
            <section className="registration_card">
                <div className="registration_container">
                    <h1 name="ChatrBox" type="logo">ChatrB<FontAwesomeIcon icon={faArrowUpRightFromSquare} bounce />X</h1>
                    <p>Welcome to ChatrBox</p>
                    <p>Please Create an Account</p>
                    <form className="registration_form">
                        <div className="form_input">
                            <label htmlFor="name"></label>
                            <input type="text" id="name" placeholder="Enter Display Name" required></input>
                        </div>
                        <div className="form_input">
                            <label htmlFor="email"></label>
                            <input type="email" id="email" placeholder="Enter Email" required></input>
                        </div>
                        <div className="form_input">
                            <label htmlFor="password"></label>
                            <input type="password" id="password" placeholder="Enter Password" required></input>
                        </div>
                        <div className="form_file">
                            <label htmlFor="avatar">
                                <img src={Avatar} alt="Add avatar icon" />
                                <p>Add Profile Picture</p>
                            </label>
                            <input type="file" id="avatar" accept="image/png, image/jpeg"></input>
                        </div>
                        <div className="form_button">
                            <button type="submit">Sign Up</button>
                        </div>
                    </form>
                    <p>Already have an account? <Link to="/">Log in!</Link></p>
                </div>
            </section>
        </>
    )
}

export default Registration;
