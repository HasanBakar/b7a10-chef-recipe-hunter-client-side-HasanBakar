import React from 'react';
import { useEffect, useState } from "react";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged ,signOut,GoogleAuthProvider,signInWithPopup } from "firebase/auth";


import { createContext } from "react";
import app from './../../firebase/firebase.config';

const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading, setLoading] = useState(true)


const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
}

const signIn = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

const handleWithGoogle = () =>{
    return signInWithPopup(auth, GoogleProvider)
}

const logOut = () =>{
    setLoading(true)
    return signOut(auth)
}
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })

        return () =>{
            unsubscribe()
        }

    },[])

 
    const authInfo ={
        createUser,loading,
        user,signIn,setUser,
        logOut,handleWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;