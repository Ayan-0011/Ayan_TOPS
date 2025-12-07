import React from 'react'
import { Link } from 'react-router-dom'

function Add_product() {
  return (
    <div>
        <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Add Product</h1>
                   
                </div>
            </div>
        <div className="container py-5">
                <div className="row py-5">
                    <form className="col-md-9 m-auto" method="post" role="form">
                        <div className="row">
                             <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputemail">Name</label>
                                <input type="text" className="form-control mt-1" id="name" name="name" placeholder="Name" />
                            </div>
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
                                <button type="submit" className="btn btn-success btn-lg px-3">Submit</button>
                            </div>
                        </div>
                    </form>
                  
                </div>
            </div>
    </div>
  )
}

export default Add_product