import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Pages/Admin'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import UserDashboard from '../Pages/UserDashboard'
import PrivateRoute from './PrivateRoute'

const Mainroute = () => {
  return (
   <Routes>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/user" element={<PrivateRoute><UserDashboard/></PrivateRoute>}></Route>
    <Route path="/admin" element={<PrivateRoute><Admin/></PrivateRoute>}></Route>
   </Routes>
  )
}

export default Mainroute