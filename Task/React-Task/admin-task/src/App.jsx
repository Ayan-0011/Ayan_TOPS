import React from 'react'
import Adminlogin from './Admin/adminlogin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Admin/components/Footer'
import Dashbord from './Admin/pages/Dashbord'
import Header from './Admin/components/Header'
import Add_users from './Admin/pages/Add_users'
import Manage_user from './Admin/pages/Manage_user'
import Before_login from './Protected/Before_login'
import After_login from './Protected/After_login'
import Edit_user from './Admin/pages/Edit_user'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <BrowserRouter>
        <Routes>

          <Route element={<Before_login/>}>
            <Route path='/' element={<Adminlogin />}></Route>
          </Route>

        <Route element={<After_login/>}>
          <Route path="/dashboard" element={<><Header /><Dashbord /><Footer /></>}></Route>
          <Route path="/add_user" element={<><Header /><Add_users /><Footer /></>}></Route>
          <Route path="/manage_user" element={<><Header /><Manage_user /><Footer /></>}></Route>
          <Route path="/edit_user/:id" element={<><Header /><Edit_user /><Footer /></>} />
        </Route>


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
