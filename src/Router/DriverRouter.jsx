import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../DriverComponents/Pages/Home'
import ProfileForm from '../DriverComponents/Components/ProfileForm'
import Profile from '../DriverComponents/Components/Profile'
import Bookings from '../DriverComponents/Components/YourRide'
import Transaction from '../DriverComponents/Components/Transaction'
import Chats from '../DriverComponents/Components/Chats'
import History from '../DriverComponents/Components/History'
import YourRide from '../DriverComponents/Components/YourRide'
import Requests from '../DriverComponents/Components/Requests'

function DriverRouter() {
  return (
    <>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/profile" element={<ProfileForm />} />
           <Route path="/profilecard" element={<Profile />} />
           <Route path="/yourride" element={<YourRide />} />
           <Route path="/requests" element={<Requests />} />
           <Route path="/chats" element={<Chats />} />
           <Route path="/transaction" element={<Transaction />} />
           <Route path="/history" element={<History />} />
        </Routes>
    </>
  )
}

export default DriverRouter