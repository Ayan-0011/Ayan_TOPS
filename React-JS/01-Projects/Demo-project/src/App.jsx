import React from 'react'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './Componenets/Header'
import Index from './Pages/Index'
import Footer from './Componenets/Footer'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Shop from './Pages/Shop'
import PageNotFound from './Pages/PageNotFound'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header/><Index/><Footer/></>}></Route>
          <Route path="/about" element={<><Header/><About/><Footer/></>}></Route>
          <Route path="/contact" element={<><Header/><Contact/><Footer/></>}></Route>
          <Route path="/shop" element={<><Header/><Shop/><Footer/></>}></Route>
          <Route path="*" element={<><PageNotFound/></>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
