import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import { FaCaretDown } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'
import { IoCartOutline } from 'react-icons/io5'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import { useCart } from '../Context/CartContext'
import { HiMenuAlt1, HiMenuAlt2, HiMenuAlt3, HiMenuAlt4 } from 'react-icons/hi'
import ResposiveMenu from './ResposiveMenu'

const Navbar = ({ location, getlocation, opendropdown, setOpendropdown }) => {

  const navigate =useNavigate()

  const { cartitem } = useCart()
  const [openNav, setOpenNav] = useState(false);

  const { user, isSignedIn } = useUser()

  const toggleDropdown = () => {
    setOpendropdown(!opendropdown)
  }

  return (

    <div className="sticky top-0 z-10 bg-white flex justify-between md:px-5 ps-4 pe-3 py-5 items-center">

      <div className='flex gap-7 item-center md:ms-40 mx-3'>
        <h1 className='font-semibold text-3xl'><span className='text-red-500 font-serif'>Z</span>aptro</h1>
        <div className='md:flex gap-1 cursor-pointer text-gray-700 items-center hidden'>
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

      <nav className='flex md:gap-7 gap-1 items-center md:me-30'>
        <ul className='md:flex gap-7 font-semibold text-lg items-center hidden'>
          <NavLink to={'/'} className={({ isActive }) => `${isActive ? " border-b-3 transition border-red-500 " : "text-black"}cursor-pointer`} > <li>Home</li></NavLink>
          <NavLink to={'/about'} className={({ isActive }) => `${isActive ? " border-b-3 transition border-red-500 " : ""}cursor-pointer`}><li>About</li></NavLink>
          <NavLink to={'/product'} className={({ isActive }) => `${isActive ? " border-b-3 transition border-red-500 " : ""}cursor-pointer`}><li>Product</li></NavLink>
          <NavLink to={'/contact'} className={({ isActive }) => `${isActive ? " border-b-3 transition border-red-500 " : ""}cursor-pointer`}><li>Contact us</li></NavLink>
        </ul>





        {/* 🟢 USER ROLE */}
        {isSignedIn && user?.publicMetadata?.role === "user" && (
          <Link to={"/cart"} className='relative'>
            <IoCartOutline className='h-7 w-7' />
            <span className='bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white '>{cartitem.length}</span>
          </Link>
        )}


        {/* 🔵 ADMIN ROLE */}
        {SignedIn && user?.publicMetadata?.role === "admin" && (
          <NavLink to="/admin/dashbord" className={({ isActive }) => `${isActive ? " border-b-3 transition border-red-500 " : ""} font-semibold text-lg cursor-pointer`} > Dashboard </NavLink>
        )}


        <div className='hidden md:block item-center'>
          <SignedOut>
            <SignInButton
              className="bg-red-500 text-white px-2 py-1 rounded-md cursor-pointer" />
          </SignedOut >

          <SignedIn>
            <div className="flex items-center gap-4 border border-gray-200 rounded-full px-4 py-2 bg-white shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <UserButton />
                <div className="leading-snug">
                  <p className="text-xs text-gray-700">Welcome {user?.publicMetadata.role === "admin" ? "Admin" : "user" }</p>
                  <p className="font-semibold text-gray-800">
                    Hey, {user?.firstName} 
                  </p>
                </div>
              </div>
            </div>
          </SignedIn>
        </div>
        {
          openNav ? <HiMenuAlt3 onClick={() => setOpenNav(false)} className='h-7 w-7 ms-4 md:hidden' /> : <HiMenuAlt1
            onClick={() => setOpenNav(true)} className='h-7 w-7 ms-4 md:hidden' />
        }
        <ResposiveMenu openNav={openNav} setOpenNav={setOpenNav} location={location} getlocation={getlocation} />

      </nav >
    </div >



  )
}

export default Navbar
