import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect, createContext } from 'react';
import { Authentication } from '../Firebase';



export const AuthContext = createContext();
export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const unsub = onAuthStateChanged(Authentication, (user)=> {
            setCurrentUser(user);
            console.log(user);
        });

        return () => {
            unsub();
        };
    }, []);

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    );
};