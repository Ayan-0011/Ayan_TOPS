import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const CategotryModal = ({ closeModal, fetchCategories }) => {

    const [obj_cate, setData] = useState({
        id: "",
        name: "",
        images: ""
    });

    const changeHandel = (e) => {
        setData({ ...obj_cate, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        //console.log(obj_cate);
    }


    const submitHandler = async (e) => {
        e.preventDefault()
        const res = await axios.post("http://localhost:5000/categories", obj_cate)
        setData({ ...obj_cate, name: "", images: "" });
        toast.success("Categories add success");
        fetchCategories();
        closeModal()
        return false;
    }


    return (
        <>
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-100">
                {/* Modal Box */}
                <div className="bg-white w-[500px]  rounded-lg p-6 relative">
                    {/* Close Button */}
                    <button onClick={closeModal} className="absolute top-2 right-2 text-xl" >
                        ✖
                    </button>
                    <h2 className="text-xl font-semibold mb-4 text-center">
                        Add Product Details
                    </h2>

                    <form onSubmit={submitHandler} className='space-y-7'>
                        <input type="text" name="name" value={obj_cate.name} onChange={changeHandel} placeholder='Enter Cetegory Name' required className='w-full rounded-2 p-2 border-2' />

                        <input type="url" name="images" value={obj_cate.images} onChange={changeHandel} placeholder='Enter image URL' required className='w-full rounded-2 p-2 border-2' />

                        <button className='w-full rounded-2 p-2 border-2 bg-blue-500 text-white'>Submit</button>
                    </form>


                </div>
            </div>

        </>
    )
}

export default CategotryModal
