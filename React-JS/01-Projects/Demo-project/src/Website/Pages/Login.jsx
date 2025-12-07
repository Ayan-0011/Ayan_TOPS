import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Login Us</h1>
                   
                </div>
            </div>
        <div className="container py-5">
                <div className="row py-5">
                    <form className="col-md-9 m-auto" method="post" role="form">
                        <div className="row">
                            
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputemail">Email</label>
                                <input type="email" className="form-control mt-1" id="email" name="email" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputname">Password</label>
                                <input type="password" className="form-control mt-1" id="name" name="password" placeholder="Password" />
                            </div>
                        </div>
                       
                        <div className="row">
                            <div className="col text-end mt-2">
                                <button type="submit" className="btn btn-success btn-lg px-3">Login</button>
                            </div>
                        </div>
                    </form>
                     <div className="row">
                        <div className="col text-start mt-2">
                           <Link to="/singup">If You not registered then Signup Here</Link>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Login