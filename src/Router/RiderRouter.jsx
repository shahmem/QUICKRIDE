import React from 'react'
import Home from '../RiderComponents/Pages/Home'
import { Route, Routes } from 'react-router'
import ProfileForm from '../RiderComponents/Components/ProfileForm'
import BookForm from '../RiderComponents/Components/BookForm'
import Booking from '../RiderComponents/Components/Booking'
import Chats from '../RiderComponents/Components/Chats'
import History from '../RiderComponents/Components/History'
import Transaction from '../RiderComponents/Components/Transaction'
import ChatWindow from '../RiderComponents/Components/ChatWindow'

function RiderRouter() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProfileForm />} />
            <Route path="/bookform" element={<BookForm />} />
            <Route path="/bookings" element={<Booking />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/chatswindow" element={<ChatWindow />} />
            <Route path="/history" element={<History />} />
            <Route path="/transaction" element={<Transaction />} />
        </Routes> 
    </>
  )
}

export default RiderRouter