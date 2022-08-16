import React from 'react'
// import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
// import Spinner from 'react-bootstrap/Spinner';


const PrivateRoutes = ({children}) => {
    // const isAuth = useSelector((state) => state.userReducer.isAuth)
    // const load = useSelector((state) => state.userReducer.loadUser) 
    const token = localStorage.getItem("token")

    return token ?  children : <Navigate to='/login' />
}

export default PrivateRoutes