import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Registration() {
    
    return(
        <section>
            <div className="wrapper">
                <div className="registration_form">
                    <h1>ChatrB<FontAwesomeIcon icon={faArrowUpRightFromSquare} bounce  />x</h1>
                    <form className="register">
                        <label htmlFor="name"></label>
                        <input type="text" id="name" placeholder="Display Name" required></input>
                        <label htmlFor="password"></label>
                        <input type="password" id="password" placeholder="Password" required></input>
                        <input type="file" id="avatar" accept="image/png, image/jpeg"></input>
                        <button type="submit">Register</button>
                    </form>
                    <p>Already have an account? <a href="#">Login!</a></p>
                </div>
            </div>
        </section>
    )
}

export default Registration;
