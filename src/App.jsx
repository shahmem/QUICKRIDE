import React from 'react'
import CommonRouter from './Router/CommonRouter'
import { BrowserRouter } from 'react-router'
import RiderRouter from './Router/RiderRouter'
import DriverRouter from './Router/DriverRouter'
import Profile from './DriverComponents/Components/Profile'

function App() {
  return (
    <>

    <BrowserRouter>
        <RiderRouter/>
        {/* <CommonRouter/> */}
        {/* <DriverRouter/> */}
    </BrowserRouter>

    </>
  )
}

export default App