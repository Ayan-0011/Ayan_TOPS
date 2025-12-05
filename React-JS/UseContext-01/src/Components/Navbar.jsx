import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemContext'

const Navbar = () => {

const { num } = useContext(ThemeContext)


  return (
    <div>
      <div className="nav">
        <h1>Ayan</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
            
        </ul>
        <h1>score:{num}</h1>
      </div>
    </div>
  )
}

export default Navbar
