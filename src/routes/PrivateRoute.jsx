import React from 'react';
import { useContext } from "react";
import { Navigate,useLocation } from "react-router-dom";
import { AuthContext } from './../Providers/AuthProviders/AuthProviders';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContext)
    
    if(loading){
        return <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
            </div>
    }

    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to="/login" replace></Navigate>
};

export default PrivateRoute;