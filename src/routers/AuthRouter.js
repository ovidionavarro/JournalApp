import React from 'react'
import  {Navigate, Route,Routes } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegistrerScreen } from '../components/auth/RegistrerScreen'

export const AuthRouter = () => {
    console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
  return (

    <Routes>
        <Route exact path='login' element={ <LoginScreen/> } />
        <Route exact path='register' element={ <RegistrerScreen/> } />
        <Route path='/*' element={< Navigate to="/auth/login"/>}  />
    </Routes>
    
  ) 
}
