import React from 'react'
import { Link } from 'react-router-dom'

const Pagenotfound = () => {
    return (
        <div>
            <div className='p-5 bg-primary text-white text-centre'>
                <h1>404</h1>
                <h3>Page Not Found</h3>
                <Link to="/" className='text-white'>Back To Home</Link>
            </div>
        </div>
    )
}

export default Pagenotfound
