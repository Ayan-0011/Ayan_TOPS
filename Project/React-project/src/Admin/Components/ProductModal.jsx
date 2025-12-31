import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const ProductModal = ({ closeModal }) => {

    const [cate, setCate] = useState([]);


    const fetch_data = async () => {
        const obj = await axios.get("http://localhost:5000/categories");
        setCate(obj.data)
        //console.log(obj.data);
    }


    useEffect(() => {
        fetch_data();
    }, []);

    const [obj_cate, setData] = useState({
        id: "",
        title: "",
        brand: "",
        price: "",
        discount: "",
        stock: "",
        images: "",
        min_desc: "",
        long_desc: ""
    });

    const changeHandel = (e) => {
        setData({ ...obj_cate, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(obj_cate);
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        const obj = await axios.post("http://localhost:5000/products", obj_cate);
        setData({  ...obj_cate,  title: "", brand: "", price: "", discount: "", images: "", stock: "", min_desc: "", long_desc: "" });
        toast.success('Products add success');
        return false;
    }





    return (
        <>
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                {/* Modal Box */}
                <div className="bg-white w-[500px]  rounded-lg p-6 relative">
                    {/* Close Button */}
                    <button onClick={closeModal} className="absolute top-2 right-2 text-xl" >
                        ✖
                    </button>
                    <h2 className="text-xl font-semibold mb-4 text-center">
                        Add Product Details
                    </h2>
                    {/* Product Form */}
                    <form onSubmit={submitHandel} className="space-y-3">

                        <select type="text" className="w-full p-2 border-2" onClick={changeHandel} name="cate_id">
                            <option value="" >Select Categories</option>
                            {
                                cate.map((value) => {
                                    return (
                                        <option value={value.id}>
                                            {value.name}
                                        </option>
                                    )
                                })
                            }
                        </select>

                        <input type="text" placeholder="Enter Product Name" value={obj_cate.title} name='title' onClick={changeHandel} className="w-full border p-2 rounded" />
                        <input type="text" placeholder="Enter Product Brand" value={obj_cate.brand} name='brand' onClick={changeHandel} className="w-full border p-2 rounded" />
                        <input type="number" placeholder="Enter Product Price" value={obj_cate.price} name='price' onClick={changeHandel} className="w-full border p-2 rounded" />
                        <input type="number" placeholder="Enter Product discount" value={obj_cate.discount} name='discount' onClick={changeHandel} className="w-full border p-2 rounded" />
                        <input type="number" placeholder="Enter Product Stock" value={obj_cate.stock} name='stock' onClick={changeHandel} className="w-full border p-2 rounded" />
                        <input type="url" placeholder="Enter Product img URL" value={obj_cate.images} name='images' onClick={changeHandel} className="w-full border p-2 rounded" />

                        <textarea name="min_desc" placeholder='Enter Product Short Description' value={obj_cate.min_desc} onClick={changeHandel} name="min_desc" className='w-full p-2 border-2'></textarea>
                        <textarea name="long_desc" placeholder='Enter Product Short Description' value={obj_cate.long_desc} onClick={changeHandel} name="long_desc" className='w-full p-2 border-2'></textarea>


                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded" >
                            Save Product
                        </button>
                    </form>


                </div>
            </div>
        </>
    )
}

export default ProductModal
