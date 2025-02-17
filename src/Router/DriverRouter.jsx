import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../DriverComponents/Pages/Home'
import ProfileForm from '../DriverComponents/Components/ProfileForm'
import Profile from '../DriverComponents/Components/Profile'

function DriverRouter() {
  return (
    <>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/profile" element={<ProfileForm />} />
           <Route path="/profilecard" element={<Profile />} />
           
        </Routes>
    </>
  )
}

export default DriverRouter