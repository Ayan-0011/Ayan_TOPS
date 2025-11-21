import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/home';
import Footer from './components/Footer';
import About from './pages/About';
import Department from './pages/Department';
import Service from './pages/Service';
import Doctor from './pages/Doctor';
import Contact from './pages/Contact';
import Pagenotfound from './pages/pagenotfound';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<><Header/><Home/><Footer/></>}></Route>
            <Route path='/about' element={<><Header/><About/><Footer/></>}></Route>
            <Route path='/Department' element={<><Header/><Department/><Footer/></>}></Route>
            <Route path='/service' element={<><Header/><Service/><Footer/></>}></Route>
            <Route path='/doctors' element={<><Header/><Doctor/><Footer/></>}></Route>
            <Route path='/contact' element={<><Header/><Contact/><Footer/></>}></Route>
            <Route path='*' element={<><Pagenotfound/></>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
