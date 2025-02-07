import React from 'react'
import CommonHome from '../CommonComponents/CommonHome'
import { Route, Routes } from 'react-router'
import Signup from '../CommonComponents/Signup'
import Login from '../CommonComponents/Login'


function CommonRouter() {
  return (
    <>
        <Routes>
            <Route path="/" element={<CommonHome />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
        </Routes>       
    </>
  )
}

export default CommonRouter