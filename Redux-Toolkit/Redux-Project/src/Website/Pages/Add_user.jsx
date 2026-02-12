import React from 'react'

const Add_user = () => {
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
                            <form className="col-md-9 m-auto" method="post" role="form">
                                <div className="row">
                                    <div className="form-group col-md-6 mb-3">
                                        <label htmlFor="inputname">Name</label>
                                        <input type="text" className="form-control mt-1" id="name" name="name" placeholder="Enter Name" />
                                    </div>
                                    <div className="form-group col-md-6 mb-3">
                                        <label htmlFor="inputemail">Email</label>
                                        <input type="email" className="form-control mt-1" id="email" name="email" placeholder="Enter Email" />
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="mb-3 col-md-6 ">
                                        <label htmlFor="inputsubject">password</label>
                                        <input type="text" className="form-control mt-1" id="subject" name="subject" placeholder="Enter Password" />
                                    </div>

                                    <div className="mb-3 col-md-6 ">
                                        <label htmlFor="inputimage">Image</label>
                                        <input type="url" className="form-control mt-1" id="subject" name="subject" placeholder="Enter image URL" />
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
        </div>
    )
}

export default Add_user
