import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Dashbord from '../Admin/pages/Dashbord';

const After_login = () => {

    const s_id = sessionStorage.getItem('s_aid');

  return (
    <div>
        {
            s_id ? <Outlet/> : <Navigate to="/"/>
        }
    </div>
  )
}

export default After_login
