import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Authentication, Storage, dbRef } from '../Firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from 'react-router-dom';


import Avatar from '../assets/icons8_add_image.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Registration = () => {

    const [error, setError] = useState(false);
    const navigation = useNavigate();
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const displayName = event.target[0].value;
        const email = event.target[1].value;
        const password = event.target[2].value;
        const file = event.target[3].files[0];
        
        try{
            const response = await createUserWithEmailAndPassword(Authentication, email, password)

            const storageRef = ref(Storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                (error) => {
                    setError(true);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
                        await updateProfile(response.user, {
                            displayName,
                            photoURL: downloadURL,
                        });
                        await setDoc(doc(dbRef, "users", response.user.uid), {
                            uid: response.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                        });
                        await setDoc(doc(dbRef, "userChats", response.user.uid), {});
                        navigation('/');
                    });
                }
            );

        }catch(error){
            setError(true);
        }
    }

    return(
        <>
            <section className="registration_card">
                <div className="registration_container">
                    <h1 name="ChatrBox" type="logo">ChatrB<FontAwesomeIcon icon={faArrowUpRightFromSquare} bounce />X</h1>
                    <p>Welcome to ChatrBox</p>
                    <p>Please Create an Account</p>
                    <form onSubmit={handleSubmit} action="submit" className="registration_form">
                        <div className="form_input">
                            <label htmlFor="name"></label>
                            <input type="text" id="name" placeholder="Enter Display Name" /*required*/></input>
                        </div>
                        <div className="form_input">
                            <label htmlFor="email"></label>
                            <input type="email" id="email" placeholder="Enter Email" /*required*/></input>
                        </div>
                        <div className="form_input">
                            <label htmlFor="password"></label>
                            <input type="password" id="password" placeholder="Enter Password" /*required*/></input>
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
                    {error && <span>Something went wrong...</span>}
                    <p>Already have an account? <Link to="/">Log in!</Link></p>
                </div>
            </section>
        </>
    )
}

export default Registration;
