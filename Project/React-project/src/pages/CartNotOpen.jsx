import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const CartNotOpen = () => {

    const user = useUser()
    //console.log(user.publicMetadata);


    const role = user?.publicMetadata?.role


    return (
        <div>
            {role === "admin" ? <Outlet /> : <Navigate to="/" />}
        </div>
    )
}

export default CartNotOpen
