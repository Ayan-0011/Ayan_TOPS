import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Manage_user = () => {
    const navigate = useNavigate();

    const [data, setdata] = useState([]);

    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        const data = await axios.get("http://localhost:3000/user")
        setdata(data.data)
    }

    const deletedata  = async (id)=>{
        const data = await axios.delete(`http://localhost:3000/user/${id}`)
        fetchdata();
        toast.delete("user delete sucessfully")
    }

    return (
        <div>
            <div>
                <div className="container-fluid bg-light py-5">
                    <div className="col-md-6 m-auto text-center">
                        <h1 className="h1">Manage Customer</h1>

                    </div>
                </div>
                <div className="container py-5">
                    <div className="row py-5">
                        <div className="col-md-9 m-auto">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>user Name</th>
                                        <th>Email</th>
                                        <th>Image</th>
                                        <th className='text-center'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        data.map((value,idx) => {

                                            return (
                                                <tr key={idx}>
                                                    <td>{value.id}</td>
                                                    <td>{value.name}</td>
                                                    <td>{value.email}</td>
                                                    <td><img src={value.image} width="50px" alt="" /></td>
                                                    <td className='text-center'>
                                                        <button className='btn btn-danger me-2' onClick={()=>deletedata(value.id)}>Delete</button>
                                                        <button className='btn btn-primary' onClick={()=>navigate(`/edit_user/${value.id}`)}>Edit</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manage_user
