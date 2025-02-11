import React from 'react'
import CommonRouter from './Router/CommonRouter'
import { BrowserRouter } from 'react-router'
import RiderRouter from './Router/RiderRouter'
import DriverRouter from './Router/DriverRouter'

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