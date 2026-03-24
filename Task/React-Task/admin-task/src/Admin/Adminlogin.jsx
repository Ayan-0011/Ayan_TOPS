import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


const Adminlogin = () => {
     const redirect = useNavigate()

    const [obj_cate, setData] = useState({
        email: "",
        password: "",
    });

    const changeHandel = (e) => {
        setData({ ...obj_cate, [e.target.name]: e.target.value });
        //console.log(obj_cate);
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        
        const obj = await axios.get(`http://localhost:3000/admin?email=${obj_cate.email}`);
        //console.log(obj.data);
        if (obj.data.length > 0) {
            if (obj.data[0].password == obj_cate.password) {
                //session created
                sessionStorage.setItem('s_aid', obj.data[0].id);
                sessionStorage.setItem('s_email', obj.data[0].email);

                toast.success('Login Success ');
                redirect('/dashboard');
            }
            else {
                toast.error('Login Failed Due to Wrong Password');
                return false;
            }
        }
        else {
            toast.error('Login Failed Due to Wrong Email');
            return false;
        }
        return false;
    }
    return (
        <div className='row'>
            <div className="container-fluid bg-light py-5">
                <div className="col-md-12 m-auto text-center">
                    <h1 className="h1">Admin Login</h1>
                </div>
            </div>
            <div className="container py-5">
                <div className="row py-5">
                    <form className="col-md-9 m-auto" onSubmit={submitHandel} method="post" role="form">
                        <div className="row">

                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputemail">Email</label>
                                <input type="email" value={obj_cate.email} onChange={changeHandel} className="form-control mt-1" id="email" name="email" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputname">Password</label>
                                <input type="password" value={obj_cate.password} onChange={changeHandel} className="form-control mt-1" id="name" name="password" placeholder="Password" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 text-end mt-2">
                                <button type="submit" className="btn btn-success btn-lg px-3">Login</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Adminlogin
