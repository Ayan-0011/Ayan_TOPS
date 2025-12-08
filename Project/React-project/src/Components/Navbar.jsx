import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import { FaCaretDown } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'
import { IoCartOutline } from 'react-icons/io5'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const Navbar = ({ location, getlocation, opendropdown, setOpendropdown }) => {

  const toggleDropdown = () => {
    setOpendropdown(!opendropdown)
  }

  return (

    <div className="max-w-7xl mx-auto nav flex justify-between px-10 py-5 items-center ">

      <div className='flex gap-7 item-center'>
        <h1 className='font-semibold text-3xl'><span className='text-red-500 font-serif'>Z</span>eptro</h1>
        <div className='flex gap-1 cursor-pointer text-gray-700 items-center'>
          <MapPin className="text-red-500" />

          <span className='font-semibold'>{location ? <div className='-space-y-2'>
            <p>{location.state_district}</p>
            <p>{location.state}</p>
          </div> : "Add Address"} </span>

          <FaCaretDown onClick={toggleDropdown} />
          {
            opendropdown ? <div className='w-[250px] h-max shadow-2xl z-50 bg-white fixed top-16 left-60 border-2 p-5 border-gray-100 rounded-md'>
              <h1 className='font-semibold mb-4 text-xl flex justify-between'>Change Location <span onClick={toggleDropdown}><CgClose /></span></h1>
              <button onClick={getlocation} className='bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-400'>Detect my location</button>
            </div> : null
          }

        </div>
      </div>

      <nav className='flex  gap-7 items-center'>
        <ul className='flex gap-7 font-semibold text-lg items-center'>
          <NavLink to={'/'} className={({ isActive }) => `${isActive ? " border-b-3 transition border-red-500 " : "text-black"}cursor-pointer`} > <li>Home</li></NavLink>
          <NavLink to={'/about'} className={({ isActive }) => `${isActive ? " border-b-3 transition border-red-500 " : ""}cursor-pointer`}><li>About</li></NavLink>
          <NavLink to={'/product'} className={({ isActive }) => `${isActive ? " border-b-3 transition border-red-500 " : ""}cursor-pointer`}><li>Product</li></NavLink>
          <NavLink to={'/contac'} className={({ isActive }) => `${isActive ? " border-b-3 transition border-red-500 " : ""}cursor-pointer`}><li>Contact us</li></NavLink>
        </ul>

        <Link to={"/cart"} className='relative'>
          <IoCartOutline className='h-7 w-7' />
          <span className='bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white '>0</span>
        </Link>

        <div>
          <SignedOut>
            <SignInButton className="bg-red-500 text-white px-2 py-1 rounded-md cursor-pointer" />
          </SignedOut >
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

      </nav>
    </div>



  )
}

export default Navbar
