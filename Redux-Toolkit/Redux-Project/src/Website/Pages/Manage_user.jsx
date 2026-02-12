import React from 'react'

const Manage_user = () => {
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
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>User Name</th>
                                    <th>Image</th>
                                    <th className='text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Abc</td>
                                    <td><img src="https://www.w3schools.com/bootstrap5/img_avatar3.png" width="50px"alt="" /></td>
                                    <td className='text-center'>
                                        <button className='btn btn-danger me-2'>Delete</button>
                                        <button className='btn btn-primary'>Edit</button>
                                    </td>
                                </tr>
                                
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
