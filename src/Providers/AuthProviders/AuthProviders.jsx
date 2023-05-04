import React from 'react';
import { useEffect, useState } from "react";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged ,signOut,GoogleAuthProvider,signInWithPopup,GithubAuthProvider  } from "firebase/auth";


import { createContext } from "react";
import app from './../../firebase/firebase.config';

const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();


export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading, setLoading] = useState(true)

/**handle email/password created user */
const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
}
/** handle signIn with email and password */
const signIn = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

/**handle with google signIn */
const handleWithGoogle = () =>{
    return signInWithPopup(auth, GoogleProvider)
}

const handleWithGithub = () =>{
    return signInWithPopup(auth, githubProvider)
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
        logOut,handleWithGoogle,handleWithGithub
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;