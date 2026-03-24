import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Add_users = () => {

    const [obj, setobj] = useState({

        id:"",
        name:"",
        email:"",
        image:"" 
    });

    const changehandle = (e)=>{
        
        setobj({...obj, id:new Date().getTime().toString(), [e.target.name]: e.target.value});
        console.log(obj)
    }

    const submitHandle =async (e)=>{
        e.preventDefault();
        const data = await axios.post(`http://localhost:3000/user`,obj);
        setobj({...obj,id:"", name:"", email:"", image:""});
        toast.success("User Addded succesfully")
    }

    return (
        <div>
            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Add User</h1>

                </div>

                <div className="container py-5">
                    <div className="row py-5">
                        <form className="col-md-9 m-auto" method="post" role="form" onSubmit={submitHandle}>
                            <div className="row">
                                <div className="form-group col-md-12 mb-3">
                                    <label htmlFor="inputemail">Name</label>
                                    <input type="text" className="form-control mt-1" value={obj.name} onChange={changehandle} id="name" name="name" placeholder="Enter Name" />
                                </div>
                                <div className="form-group col-md-12 mb-3">
                                    <label htmlFor="inputemail">Email</label>
                                    <input type="email" className="form-control mt-1" value={obj.email} onChange={changehandle} id="email" name="email" placeholder="Enter Email" />
                                </div>
                                <div className="form-group col-md-12 mb-3">
                                    <label htmlFor="inputname">Image</label>
                                    <input type="url" className="form-control mt-1" value={obj.image} onChange={changehandle} id="name" name="image" placeholder="Enter url" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col text-center mt-2">
                                    <button type="submit" className="btn btn-success btn-lg px-3">Submit</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add_users
