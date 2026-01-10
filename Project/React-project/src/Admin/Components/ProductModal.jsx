import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const ProductModal = ({ closeModal, FetchAllproducts, editProduct }) => {

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
        price: '',
        discount: "",
        stock: "",
        images: [],
        min_desc: "",
        long_desc: ""
    });

    const changeHandel = (e) => {
        setData({ ...obj_cate, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        //console.log(obj_cate);
    }



    const handleImageChange = (e, index) => {
        const newImages = [...obj_cate.images];
        console.log(obj_cate.images);

        newImages[index] = e.target.value;

        setData((prev) => ({
            ...prev,
            images: newImages
        }));
    };




    const submitHandel = async (e) => {
        e.preventDefault();

        if (editProduct) {
            await axios.patch(`http://localhost:5000/products/${editProduct.id}`,obj_cate);
            toast.success("Product updated successfully");
            return false
        }
        else {

            const obj = await axios.post("http://localhost:5000/products", obj_cate);
            setData({ ...obj_cate, title: "", brand: "", price: "", discount: "", images: "", stock: "", min_desc: "", long_desc: "" });
            toast.success('Products add success');
            FetchAllproducts();
            closeModal()
            return false;
        }
    }





    return (
        <>
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                {/* Modal Box */}
                <div className="bg-white w-[900px] h-[700px] rounded-lg p-6 relative overflow-auto">
                    {/* Close Button */}
                    <button onClick={closeModal} className="absolute top-2 right-2 text-xl" >
                        ✖
                    </button>
                    <h2 className="text-xl font-semibold mb-4 text-center">
                        Add Product Details
                    </h2>
                    {/* Product Form */}
                    <form
                        onSubmit={submitHandel}
                        className="space-y-6 bg-gray-50 p-6 rounded-xl shadow-inner"
                    >
                        {/* Category */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Category
                            </label>
                            <select
                                name="category"
                                value={obj_cate.category || ""}
                                onChange={changeHandel}
                                className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            >
                                <option value="">Select Category</option>
                                {cate.map((value) => (
                                    <option key={value.id} value={value.name}>
                                        {value.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Product Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Product Name
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={obj_cate.title}
                                onChange={changeHandel}
                                placeholder="Enter product name"
                                className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                required
                            />
                        </div>

                        {/* Brand + Price */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Brand
                                </label>
                                <input
                                    type="text"
                                    name="brand"
                                    value={obj_cate.brand}
                                    onChange={changeHandel}
                                    placeholder="Brand name"
                                    className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Price (₹)
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    value={obj_cate.price.toLocaleString("en-IN")}
                                    onChange={changeHandel}
                                    placeholder="Price"
                                    className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* Discount + Stock */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Discount (%)
                                </label>
                                <input
                                    type="number"
                                    name="discount"
                                    value={obj_cate.discount}
                                    onChange={changeHandel}
                                    placeholder="Discount"
                                    className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Stock
                                </label>
                                <input
                                    type="number"
                                    name="stock"
                                    value={obj_cate.stock}
                                    onChange={changeHandel}
                                    placeholder="Available stock"
                                    className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* Images */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Product Images (3 URLs)
                            </label>

                            <div className="space-y-2">
                                <input
                                    type="url"
                                    placeholder="Image URL 1"
                                    onChange={(e) => handleImageChange(e, 0)}
                                    className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="url"
                                    placeholder="Image URL 2"
                                    onChange={(e) => handleImageChange(e, 1)}
                                    className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500"

                                />
                                <input
                                    type="url"
                                    placeholder="Image URL 3"
                                    onChange={(e) => handleImageChange(e, 2)}
                                    className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500"

                                />
                            </div>
                        </div>

                        {/* Descriptions */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Short Description
                            </label>
                            <textarea
                                name="min_desc"
                                value={obj_cate.min_desc}
                                onChange={changeHandel}
                                placeholder="Short product description"
                                rows="2"
                                className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Long Description
                            </label>
                            <textarea
                                name="long_desc"
                                value={obj_cate.long_desc}
                                onChange={changeHandel}
                                placeholder="Detailed product description"
                                rows="4"
                                className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-all"
                        >
                            Save Product
                        </button>
                    </form>



                </div>
            </div>
        </>
    )
}

export default ProductModal
