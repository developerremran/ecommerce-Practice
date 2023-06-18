import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null)

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true)

    const provider = new GoogleAuthProvider();

    // firebaseConnected

    // newUserRegisterEmailAndPassword 

    const newUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // email and password login 
    const oldUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // user logOUt system 
    const logOut = () => {
        setLoading(true)
        signOut(auth).then(() => {

        }).catch((error) => {
            console.log(error);
        });

    }

    // google user 

    const googleUser = () => {
        return signInWithPopup(auth, provider)

    }






    // current user check 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged((auth), currentUser => {
            setUser(currentUser)
            if (currentUser){
                axios.post('http://localhost:5000/jwt', {email : currentUser.email})
                .then(data => {
                    console.log(data.data);
                    localStorage.setItem('access-token', data.data)
                })
            }else{
                localStorage.removeItem('access-token')
            }

                setLoading(false)
        })
        return () => {
            return unSubscribe
        }
    }, [])

    const authInfo = {
        user,
        loading,
        newUser,
        oldUser,
        logOut,
        googleUser

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;