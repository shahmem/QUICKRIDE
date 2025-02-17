import React from 'react'
import img3 from '../assets/images/images.jpeg'
import { useNavigate } from 'react-router';

function Drive() {
  const navigate =useNavigate();

  return (
    <>
    <div className='flex flex-col md:flex-row p-6 md:justify-between md:pr-14 gap-5'>
        <div className='flex flex-col gap-4 md:pl-12 text-[#2d8873] md:w-1/2 font-bold  '>
          <h1 className='md:max-w-96 leading-[3.7rem] md:leading-[5rem] text-5xl md:text-6xl md:tracking-tight'>
          Drive when you want, make what you need
          </h1>
          <p className='text-base text-[#414141] font-light mt-3 md:mt-8'>Earn on your own schedule.</p>
          <a onClick={()=>{navigate('/signup', { state: { active: 'driver' }})}} className='text-white bg-[#31977f] hover:bg-[#206d5b] w-max rounded-lg px-4 py-2 text-xs font-semibold'>Get Started</a>
        </div>
        <div className='flex justify-center mt-8 md:py-7'>
          <img className='w-full md:w-[30rem]' src={img3} alt="" />
        </div>
      </div>
    </>
  )
}

export default Drive