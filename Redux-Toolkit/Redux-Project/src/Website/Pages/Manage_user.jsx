import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delete_data, get_data } from '../../Redux/Slices/FetchdataSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Manage_user = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_data())
    },[])

    const { users } = useSelector((state) => state.data);
    //console.log(users);

    const redirect = useNavigate();
    
    const deleteitme = (id) => { 
        dispatch(delete_data(id))
        toast.success("user deleted successfully")
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
                                        <th>User Name</th>
                                        <th>email</th>
                                        <th>Image</th>
                                        <th className='text-center'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users && users.map((items) => {
                                            return (

                                                <tr>
                                                    <td>{items.id}</td>
                                                    <td>{items.name}</td>
                                                    <td>{items.email}</td>
                                                    <td>
                                                        <img
                                                            src={items.image}
                                                            alt={items.name}
                                                            style={{ width: "50px", height: "50px", objectFit: "cover" }}
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <button onClick={() => deleteitme(items.id)} className="btn btn-danger me-2">Delete</button>
                                                        <button onClick={() => redirect("/")} className="btn btn-primary">Edit</button>
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
