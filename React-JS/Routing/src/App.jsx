import React from 'react'
import { BrowserRouter, Routes, Route } from  'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/footer'
import About from './Pages/About'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Header/><Home/><Footer/></>}></Route>
          <Route path='/about' element={<><Header/><About/><Footer/></>}></Route>
          <Route path='/contact' element={<><Header/><Contact/><Footer/></>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
