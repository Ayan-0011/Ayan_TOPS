import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Website/Component/Header'
import Footer from './Website/Component/Footer'
import Contact from './Website/Pages/Contact'
import PageNotFound from './Website/Pages/PageNotFound'
import Add_user from './Website/Pages/Add_user'
import Manage_user from './Website/Pages/Manage_user'
import Dashbord from './Website/Pages/Dashbord'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
         <ToastContainer></ToastContainer>
        <Routes>
          <Route path="/" element={<><Header /><Dashbord /><Footer /></>}></Route>
          <Route path="/contact" element={<><Header /><Contact /><Footer /></>}></Route>
          <Route path="/add_user" element={<><Header /><Add_user /><Footer /></>}></Route>
          <Route path="/manage_user" element={<><Header /><Manage_user /><Footer /></>}></Route>
          <Route path="*" element={<><PageNotFound /></>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
