import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemContext'

const Home = () => {
    
    const {change} = useContext(ThemeContext)    


  return (
    <div>
      <button onClick={change}>Change</button>
    </div>
  )
}

export default Home
