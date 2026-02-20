import React, { useState } from 'react'
import {useDispatch } from 'react-redux'
import { insert_data } from '../../Redux/Slices/FetchdataSlice';
import { toast } from 'react-toastify';
const Add_user = () => {

    const dispatch = useDispatch();

    const [obj_cate, setData] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
        image:""
    });

    const changeHandel = (e) => {
        setData({ ...obj_cate, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
       // console.log(obj_cate);
    }

    const validation = () => {
        var result = true;
        if (obj_cate.name == "" || obj_cate.name == null) {
            result = false;
            toast.error('Name field is required !');
            return false;
        }
        if (obj_cate.email == "" || obj_cate.email == null) {
            result = false;
            toast.error('Email field is required !');
            return false;
        }
        if (obj_cate.password == "" || obj_cate.password == null) {
            result = false;
            toast.error('password field is required !');
            return false;
        }
        if (obj_cate.mobile == "" || obj_cate.mobile == null) {
            result = false;
            toast.error('mobile field is required !');
            return false;
        }
        if (obj_cate.image == "" || obj_cate.image == null) {
            result = false;
            toast.error('image field is required !');
            return false;
        }
        return result;
    }
    const submitHandel = (e) => {
        e.preventDefault();
        if (validation()) {
            dispatch(insert_data(obj_cate));
            setData({ ...obj_cate, name: "", email: "", password: "", mobile: "",image:"" });
            toast.success("user added successfully....")
        }
    }


    return (
        <div>
            <div>
                <div>
                    <div class="container-fluid bg-light py-5">

                        <div className="col-md-6 m-auto text-center">
                            <h1 className="h1">Add user</h1>
                        </div>
                    </div  >
                    {/* Start Contact */}
                    <div className="container py-5">
                        <div className="row py-1">
                            <form className="col-md-9 m-auto" method="post" onSubmit={submitHandel} role="form">
                                <div className="row">
                                    <div className="form-group col-md-6 mb-3">
                                        <label htmlFor="inputemail">Name</label>
                                        <input type="text" value={obj_cate.name} onChange={changeHandel} className="form-control mt-1" id="name" name="name" placeholder="Name" />
                                    </div>
                                    <div className="form-group col-md-6 mb-3">
                                        <label htmlFor="inputemail">Email</label>
                                        <input type="email" value={obj_cate.email} onChange={changeHandel} className="form-control mt-1" id="email" name="email" placeholder="Email" />
                                    </div>
                                    <div className="form-group col-md-6 mb-3">
                                        <label htmlFor="inputname">Password</label>
                                        <input type="password" value={obj_cate.password} onChange={changeHandel} className="form-control mt-1" id="name" name="password" placeholder="Password" />
                                    </div>
                                    <div className="form-group col-md-6 mb-3">
                                        <label htmlFor="inputname">Mobile</label>
                                        <input type="number" value={obj_cate.mobile} onChange={changeHandel} className="form-control mt-1" id="name" name="mobile" placeholder="Mobile" />
                                    </div>
                                    <div className="form-group col-md-12 mb-3">
                                        <label htmlFor="inputname">Image</label>
                                        <input type="url" value={obj_cate.image} onChange={changeHandel} className="form-control mt-1" id="name" name="image" placeholder="image url" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col text-center mt-2">
                                        <button type="submit" className="btn btn-success btn-lg px-3">Signup</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Add_user
