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
            console.log(response.data);
            
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
            toast.success("User deleted successfully");
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
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y  divide-gray-200">
                            <thead className="bg-gray-50 ">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category image</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 ">
                                {categoryData?.map((product) => (
                                    <tr key={product.id} className="hover:bg-gray-100 transition-colors uppercase">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            <img src={product.images} alt={product.name} className='w-[60px]' /></td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <button className="text-blue-600 hover:text-blue-800 font-medium mr-3 cursor-pointer"><Edit size={20} /></button>
                                            <button onClick={()=> deleteHandler(product.id)} className="text-red-600 hover:text-red-800 font-medium cursor-pointer"><Trash2 size={20} /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Categories
