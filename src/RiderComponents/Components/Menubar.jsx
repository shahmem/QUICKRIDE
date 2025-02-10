import { faClipboardList, faComments, faListCheck, faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Menubar() {
  return (
    <>
        <div className='flex w-full fixed bottom-0  px-6 py-3 md:px-24 z-30 md:py-3 justify-between text-sm bg-slate-100'>
          <div className='flex flex-col items-center rounded-3xl p-2 gap-1 hover:bg-slate-200'>
          <FontAwesomeIcon className='md:size-5' icon={faListCheck} />
            <p className='text-[9px] md:text-[11px] font-semibold'>Bookings</p>
          </div>
          <div className='flex flex-col items-center rounded-3xl p-2 gap-1 hover:bg-slate-200'>
          <FontAwesomeIcon className='md:size-5' icon={faComments} />
            <p className='text-[9px] md:text-[11px] font-semibold'>Chats</p>
          </div>
          <div className='flex flex-col items-center rounded-3xl p-2 gap-1 hover:bg-slate-200'>
          <FontAwesomeIcon className='md:size-5' icon={faClipboardList} />
            <p className='text-[9px] md:text-[11px] font-semibold'>History</p>
          </div>
          <div className='hidden md:flex flex-col rounded-3xl p-2 items-center gap-1 hover:bg-slate-200'>
          <FontAwesomeIcon className='md:size-5' icon={faMoneyBillTrendUp} />
            <p className='text-[9px] md:text-[11px] font-semibold'>Transaction</p>
          </div>
        </div>
    </>
  )
}

export default Menubar