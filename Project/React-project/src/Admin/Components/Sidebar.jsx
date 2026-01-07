import { UserButton } from '@clerk/clerk-react';
import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { ChevronLeft, Layers } from 'lucide-react';
import { FcFeedback } from 'react-icons/fc';


const Sidebar = () => {

    const navigate = useNavigate()

    const linkClass = ({ isActive }) =>
        `w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all
     ${isActive ? "bg-blue-600 shadow-lg" : "hover:bg-gray-800"}`;


    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className={`${sidebarOpen ? 'w-64' : 'w-0'} bg-gray-900  text-white transition-all duration-300 overflow-hidden flex-shrink-0`}>
                <div className="p-6 sticky top-0 z-10">
                    <button onClick={() => navigate('/')} className='bg-white mb-5 text-black px-3 py-1 rounded-md cursor-pointer flex gap-1 items-center'><ChevronLeft /> Back to Home </button>
                    <h2 className="text-2xl font-bold mb-8 text-white ">Admin Panel</h2>
                    <nav className="space-y-2 ">

                        <NavLink to="/admin/dashbord" className={linkClass}>
                            <span className='text-xl'>📊</span><span className='font-medium'>Dashboard</span>
                        </NavLink>

                        <NavLink to="/admin/orders" className={linkClass}>
                            <span className='text-xl'>🛒</span><span className='font-medium'>Orders</span>
                        </NavLink>

                        <NavLink to="/admin/productss" className={linkClass}>
                            <span className='text-xl'>📦</span><span className='font-medium'>Products</span>
                        </NavLink>
                        <NavLink to="/admin/category" className={linkClass}>
                            <span className='text-xl'><Layers size={20} className='text-blue-500' /></span><span className='font-medium'>Ctaegorys</span>
                        </NavLink>

                        <NavLink to="/admin/users" className={linkClass}>
                            <span className='text-xl'>👥</span><span className='font-medium'>Users</span>
                        </NavLink>

                        <NavLink to="/admin/fb" className={linkClass}>
                            <span className='text-xl'><FcFeedback/></span><span className='font-medium'>Feedback's</span>
                        </NavLink>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-x-auto ">
                {/* Header */}
                <div className="bg-gray-100 shadow-sm p-4 flex items-center justify-between sticky top-0 z-10">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors" >
                        <span className="text-2xl">{sidebarOpen ? '✕' : '☰'}</span>
                    </button>

                    <div className="flex items-center space-x-4  gap-1 border border-gray-200 rounded-full p-3 bg-white shadow-sm hover:shadow-lg transition">
                        <div className=" rounded-full flex text-white font-bold">
                            {<UserButton size={50} />}
                        </div>
                        <span className="text-gray-700 font-semibold pe-2">Admin User</span>
                    </div>
                </div>  
                {/* Content */}
                {/* <Dashboard /> */}
                <div className='p-7'>
                    <Outlet />
                </div>

            </div>
        </div>

    )
}

export default Sidebar
