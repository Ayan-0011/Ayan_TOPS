import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contac from './pages/Contac'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Navbar /><Home /></>}></Route>
          <Route path='/about' element={<> <Navbar/><About /></>}></Route>
          <Route path='/product' element={ <><Navbar /><Products /></>}></Route>
          <Route path='/contact' element={ <><Navbar /><Contac /></>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
