  import React from 'react'
  import { Navigate, Outlet } from 'react-router-dom'

  const Before_login = () => {

      const s_id = sessionStorage.getItem("s_aid")
    return (
      <div>
          {
              s_id ? <Navigate to="/dashboard"/> : <Outlet/>
          }
      </div>
    )
  }

  export default Before_login
