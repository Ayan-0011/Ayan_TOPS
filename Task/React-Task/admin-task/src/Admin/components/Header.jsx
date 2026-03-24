import React from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Header = () => {
  const navigate = useNavigate();

  const handlelogout = () => {
    sessionStorage.clear();
    toast.warning("Logout successful")
    navigate('/')
  }


  return (
    <div>
      <div className="p-5 bg-primary text-white text-center">
        <h1>CRUD operation</h1>
      </div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-link">Dashbord</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/add_user" className="nav-link" >Add User</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/manage_user" className="nav-link">Manage user</NavLink>
            </li>
          </ul>

          <button className='btn btn-danger' onClick={handlelogout}>Logout</button>
        </div>
      </nav>
    </div>


  )
}

export default Header
