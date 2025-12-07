import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="nav flex justify-between px-10 py-5 bg-red-500 text-white items-center">
        <h1 className='font-semibold text-3xl'>Shop</h1>
        <ul className='flex gap-7 font-serif text-lg'>

            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/about'><li>About</li></NavLink>
            <NavLink to='/product'><li>Product</li></NavLink>
            <NavLink to='/contact'><li>Contact us</li></NavLink>   

        </ul>
      </div>
    </div>
  )
}

export default Navbar
