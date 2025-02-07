import React from 'react'
import Home from '../RiderComponents/Home'
import { Route, Routes } from 'react-router'
import ProfileForm from '../RiderComponents/Components/ProfileForm'
import BookForm from '../RiderComponents/Components/BookForm'

function RiderRouter() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProfileForm />} />
            <Route path="/bookform" element={<BookForm />} />
        </Routes> 
    </>
  )
}

export default RiderRouter