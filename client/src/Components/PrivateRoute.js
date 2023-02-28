import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const isAuth = useSelector((el)=> el.isAuth);

    if(!isAuth) return <Navigate to="/login"></Navigate>
  
    return children
}

export default PrivateRoute