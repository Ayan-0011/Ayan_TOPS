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

                    <form onSubmit={submitHandler}
                        className="space-y-6 bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto">
                        <h2 className="text-xl font-semibold text-center text-gray-800">
                            Add New Category
                        </h2>

                        {/* Category Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Category Name
                            </label>
                            <input type="text" name="name" value={obj_cate.name} onChange={changeHandel} placeholder="Enter category name" required
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
                        </div>

                        {/* Category Image */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Category Image URL
                            </label>
                            <input type="url" name="images" value={obj_cate.images} onChange={changeHandel} placeholder="https://example.com/image.jpg" required
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 active:scale-95 transition-all" >
                            Save Category
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default CategotryModal
