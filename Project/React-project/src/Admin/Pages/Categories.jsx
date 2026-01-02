import axios from 'axios';
import { Edit, Trash, Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import CategotryModal from '../Components/CatgoryModal';
import { toast } from 'react-toastify';

const Categories = () => {

    const [categoryData, setCategoryData] = useState();
    const [openModal, setOpenModal] = useState(false);

    const fetchCategories = async () => {
        try {
            const response = await axios.get("http://localhost:5000/categories");
            setCategoryData(response.data);
            //console.log(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCategories()
    }, []);

    const deleteHandler = async (id) => {
        const check = confirm("Do You want delete")
        if (check) {
            const del_user = await axios.delete(`http://localhost:5000/categories/${id}`)
            toast.success("category deleted successfully");
        }
        fetchCategories();
        return false;
    }


    return (
        <>
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="md:text-3xl text-mdxt-3xl font-bold text-gray-800">Manage Category</h1>
                    <button onClick={() => setOpenModal(true)} className="bg-blue-500 text-white px-2 md:px-6 py-2 rounded-lg cursor-pointer text-sm hover:bg-blue-600 transition-colors md:font-medium">
                        Add New Category
                    </button>
                    {
                        openModal && (<CategotryModal closeModal={() => setOpenModal(false)} fetchCategories={fetchCategories} />)
                    }
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categoryData?.map((product) => (

                        <div key={product.id}
                            className="group bg-white rounded-2xl shadow-md  hover:shadow-2xl hover:-translate-y-2  transition-all duration-300 p-4  flex flex-col items-center text-center" >
                            {/* Image */}
                            <div className="w-32 h-32 mb-4 overflow-hidden rounded-xl">

                                <img src={product.images} alt={product.name}
                                    className="w-full h-full object-contain transition-transform duration-300  group-hover:scale-110" />
                            </div>


                            {/* Category Name */}
                            <h3 className="text-lg font-semibold text-start uppercase text-gray-800 mb-3">
                                {product.name}
                            </h3>

                            {/* Action Buttons */}
                            <div className="flex gap-4 mt-auto opacity-80 group-hover:opacity-100 transition">

                                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium   text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"  >
                                    <Edit size={18} />Edit
                                </button>

                                <button onClick={() => deleteHandler(product.id)}
                                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium  text-red-600 border border-red-600 rounded-lg hover:bg-red-600 hover:text-white transition" >
                                    <Trash2 size={18} /> Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>



            </div>


        </>
    )
}

export default Categories
