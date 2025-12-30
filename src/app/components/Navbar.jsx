"use client"
import React from 'react'
import Image from 'next/image';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

function Navbar() {
  return (
    <>
     <header className="fixed top-0 left-60 right-0 h-16 bg-white border-b border-[#E1E4EB] flex items-center justify-between px-10 z-50">
        
      <h1 className="text-lg font-semibold">Welcome</h1>

      <div className="flex items-center gap-2 relative left-5">
        <button className="hover:bg-slate-100 transition duration-150 ease-in-out p-2 rounded-full cursor-pointer">
          <NotificationsNoneIcon />
        </button>
        <button className="hover:bg-slate-100 transition duration-150 ease-in-out p-2 rounded-full cursor-pointer">
          <SettingsOutlinedIcon />
        </button>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm">
          <span className="w-7 h-7 bg-indigo-600 text-white rounded-full flex items-center justify-center">
            A
          </span>
          <span className="font-medium mx-1">Admin Dev </span>
          <KeyboardArrowDownOutlinedIcon />
        </div>
      </div>
    </header>
    </>
  )
}

export default Navbar