import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../DriverComponents/Pages/Home'
import ProfileForm from '../DriverComponents/Components/ProfileForm'

function DriverRouter() {
  return (
    <>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/profile" element={<ProfileForm />} />

        </Routes>
    </>
  )
}

export default DriverRouter