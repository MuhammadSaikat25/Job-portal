import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { Navigate } from 'react-router-dom';

const EmployerPrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <h1 className="text-center font-semibold text-blue-600">Loading</h1>
    }
    if(user){
        return children
    }
    return <Navigate to={'/'}></Navigate>
};

export default EmployerPrivateRoute;