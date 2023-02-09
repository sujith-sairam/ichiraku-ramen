import React from 'react'
import { Outlet } from 'react-router'
import LandingPage from '../pages/landingPage'

const ProtectedRoute=()=>{
    const isUser=1
    return isUser?<Outlet />:<LandingPage />
}

export default ProtectedRoute