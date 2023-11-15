import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location=useLocation()
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <span className="loading loading-bars loading-xs"></span>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace ></Navigate>
};

export default PrivateRoute;