import React from 'react';
import { useEffect, useState } from "react";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged ,signOut  } from "firebase/auth";
import { createContext } from "react";
import app from './../../firebase/firebase.config';

const auth = getAuth(app);
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
        user,signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;