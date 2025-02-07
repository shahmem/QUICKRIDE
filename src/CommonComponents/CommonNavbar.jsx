import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function CommonNavbar({scrollToSection}) {
    const[isOpen,setIsOpen] = useState(false);
    const togglerBtn = () =>{
        setIsOpen(!isOpen);
    }
    const navigate= useNavigate();
  return (
    <>
        <nav className='flex  md:px-8 p-3 items-center w-full justify-between'>
            <div>
                <img className='w-24' src={logo} alt="logo" />
            </div>
            <div className='flex gap-40 text-xs font-semibold'>
                <div className='md:flex gap-6 hidden  tracking-wide'>
                    <button className='hover:bg-[#3aad92] focus:bg-[#3aad92] focus:text-white hover:text-white focus:rounded-md hover:rounded-md px-3 py-1 uppercase' aria-current="true" >Home</button >
                    <button onClick={() => scrollToSection("rider")} className='hover:bg-[#3aad92] focus:bg-[#3aad92] focus:text-white hover:text-white focus:rounded-md hover:rounded-md px-3 py-1 uppercase'>Ride</button > 
                    <button onClick={() => scrollToSection("drive")} className='hover:bg-[#3aad92] focus:bg-[#3aad92] focus:text-white hover:text-white focus:rounded-md hover:rounded-md px-3 py-1 uppercase'>Drive</button >
                </div>
                <div className='py-1 hidden md:block'>
                    <a onClick={()=>{navigate('/login')}}  className='text-white bg-[#3aad92] hover:bg-[#319981] rounded-lg px-4 py-2 text-xs font-semibold'>Get Started</a>
                </div>
                <button className='md:hidden' onClick={togglerBtn}>
                     {isOpen ? '' : <FontAwesomeIcon icon={faBars} />}
                </button>
            </div>
        </nav>
    </>
  )
}

export default CommonNavbar