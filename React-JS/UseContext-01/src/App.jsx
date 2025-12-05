// Context ham props driling ko easy way me karne ke liye krte he 
// props keke use me hum kisi bhi grandchild ko ese data nahi bhej sakte usko flow me he bhjena padta he  jaisa Parents = Child =Grandchild
// lekin context me ham sab ka data ek file me rakh ke ukso app component ke bich rakh denge fir koi bhi data use karna ho to sidha context ke use ke usko  use kar sakte he 

// Context has a 3 step
// 1 is createContext 
// 2 is use Provider
// 3 is apko yaaha use karna he vaha useContext 


import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { ThemeContext } from './Context/ThemContext'

const App = () => {

  const [num, setNum] = useState(0);

  const change = ()=>{
    setNum(num + 1)
  }


  return (
    <div>
      <ThemeContext.Provider value={{ num , change }}>
        <Navbar />
        <Home />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
