import React from 'react'
import {Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <div>
            <Routes>
                <Route  exact path='/' element={<JournalScreen/>} />
                <Route  path='/auth/*' element={ <AuthRouter/>} />
                <Route path='/*' element={< Navigate to="/"/>}  />

            </Routes>
        </div>
    </BrowserRouter>
  )
}
