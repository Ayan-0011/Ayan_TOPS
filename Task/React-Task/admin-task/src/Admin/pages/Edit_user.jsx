import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const Edit_user = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [data, setdata] = useState({
        name: "",
        email: "",
        image: ""
    });

    //fetch single user data 
    useEffect(() => {
        getdata()
    }, []);

    const getdata = async () => {
        const fet_data = await axios.get(`http://localhost:3000/user/${id}`)
        setdata(fet_data.data)
    }

    //handle input chnage 
    const chnagehandle = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    }

    //update user 
    const submithnadle = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3000/user/${id}`,data)
        toast.success("Update Succefully")
        navigate("/manage_user")
    }




    return (
        <div className="container py-5">
            <h2 className='text-center'>Edit User</h2>

            <form onSubmit={submithnadle}>
                <input type="text" name="name" value={data.name} onChange={chnagehandle}  placeholder="Name" className="form-control mb-3"/>

                <input  type="email"  name="email"  value={data.email} onChange={chnagehandle}  placeholder="Email" className="form-control mb-3"/>

                <input type="text"  name="image"  value={data.image} onChange={chnagehandle}  placeholder="Image URL" className="form-control mb-3" />

                <button className="btn btn-success">Update</button>
            </form>
        </div>
    )
}

export default Edit_user
