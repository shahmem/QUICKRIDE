import React from 'react'
import Home from '../RiderComponents/Pages/Home'
import { Route, Routes } from 'react-router'
import ProfileForm from '../RiderComponents/Components/ProfileForm'
import BookForm from '../RiderComponents/Components/BookForm'
import Booking from '../RiderComponents/Components/Booking'
import Chats from '../RiderComponents/Components/Chats'
import History from '../RiderComponents/Components/History'
import Transactrion from '../RiderComponents/Components/Transactrion'

function RiderRouter() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProfileForm />} />
            <Route path="/bookform" element={<BookForm />} />
            <Route path="/bookings" element={<Booking />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/history" element={<History />} />
            <Route path="/transaction" element={<Transactrion />} />
        </Routes> 
    </>
  )
}

export default RiderRouter