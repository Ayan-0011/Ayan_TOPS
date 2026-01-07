import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const CartNotOpen = () => {


    const { user } = useUser();
    //console.log(user.publicMetadata);



    const role = user?.publicMetadata?.role


    return (
        <div>
            {role === "admin" ? <Navigate to="/admin/dashbord" /> : <Outlet />}
        </div>
    )
}

export default CartNotOpen
