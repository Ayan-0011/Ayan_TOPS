import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className="container">
                <div className="row mt-2">
                    <div className="col-md-12 cols-m-12">
                        <nav className="navbar navbar-expand-lg navbar-dark">
                            <div className="container-fluid">
                                <h1><span className="text-dark">Medi</span><span className="text-info">Nest</span></h1>
                                <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="mynavbar">
                                    <ul className="navbar-nav me-auto ms-5">
                                        <li className="nav-item active mx-3">
                                            <NavLink className="nav-link text-info" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <NavLink className="nav-link text-dark" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <NavLink className="nav-link text-dark" to="/Department">Departments</NavLink>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <NavLink className="nav-link text-dark" to="/service">Services</NavLink>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <NavLink className="nav-link text-dark" to="/doctors">Doctors</NavLink>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <NavLink className="nav-link text-dark" to="#">More Pages</NavLink>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <NavLink className="nav-link text-dark" to="#">Dropdown</NavLink>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <NavLink className="nav-link text-dark" to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                    <button className="btn btn-primary" type="button">Appointment</button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
