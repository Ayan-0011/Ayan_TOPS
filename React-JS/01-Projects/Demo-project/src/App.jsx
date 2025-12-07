import React from 'react'
import {BrowserRouter,Routes,Route } from 'react-router-dom'


import About from './Website/Pages/About'
import Contact from './Website/Pages/Contact'
import Shop from './Website/Pages/Shop'
import Shop_single from './Website/Pages/Shop_Single'
import Index from './Website/Pages/Index'
import Header from './Website/Componenets/Header'
import PageNotFound from './Website/Pages/PageNotFound'
import Footer from './Website/Componenets/Footer'
import Login from './Website/Pages/Login'
import Signup from './Website/Pages/Sing_up'
import Admin_login from './Admin/Pages/Admin_login'
import AHeader from './Admin/Component/Aheader'
import Add_categories from './Admin/Pages/Add_categories'
import Manage_categories from './Admin/Pages/Manage_categories'
import AFooter from './Admin/Component/Afooter'
import Add_product from './Admin/Pages/Add_product'
import Manage_product from './Admin/Pages/Manage_product'
import Manage_contact from './Admin/Pages/Manage_Contact'
import Manage_customer from './Admin/Pages/Manage_customer'
import Dashbord from './Admin/Pages/Dashbord'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header/><Index/><Footer/></>}></Route>
          <Route path="/about" element={<><Header/><About/><Footer/></>}></Route>
          <Route path="/contact" element={<><Header/><Contact/><Footer/></>}></Route>
          <Route path="/shop" element={<><Header/><Shop/><Footer/></>}></Route>
          <Route path="/shop" element={<><Header/><Shop_single/><Footer/></>}></Route>
          <Route path="*" element={<><PageNotFound/></>}></Route>

          <Route path='/login' element={<><Header/><Login/><Footer/></>}></Route>
          <Route path='/singup' element={<><Header/><Signup/><Footer/></>}></Route>


          <Route path="/admin-login" element={<><Admin_login /></>}></Route>
          <Route path="/Dashbord" element={<><AHeader /><Dashbord/><AFooter /></>}></Route>
          <Route path="/add_categories" element={<><AHeader /><Add_categories /><AFooter /></>}></Route>
          <Route path="/manage_categories" element={<><AHeader /><Manage_categories/><AFooter /></>}></Route>
          <Route path="/add_product" element={<><AHeader /><Add_product/><AFooter /></>}></Route>
          <Route path="/manage_product" element={<><AHeader /><Manage_product/><AFooter /></>}></Route>
          <Route path="/manage_contact" element={<><AHeader /><Manage_contact/><AFooter /></>}></Route>
          <Route path="/manage_customer" element={<><AHeader /><Manage_customer/><AFooter /></>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
