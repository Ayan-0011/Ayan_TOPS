import React, { useEffect, useState } from 'react'
import { getData } from '../../Context/DataContext';
import { Delete, DeleteIcon, Edit, Edit2, LucideDelete, Trash2 } from 'lucide-react';
import { FaDeleteLeft } from 'react-icons/fa6';
import ProductModal from '../Components/ProductModal';
import { toast } from 'react-toastify';
import axios from 'axios';

const Productss = () => {

  const { data, FetchAllproducts, } = getData()
  const [openModal, setOpenModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    FetchAllproducts();
  }, []);

  const deleteHandler = async (id) => {
    const check = confirm("Do You want delete this Product ")
    if (check) {
      const del_user = await axios.delete(`http://localhost:5000/products/${id}`)
      toast.success("Product deleted successfully");
    }
    FetchAllproducts();
    return false;
  }

  const editHandler = (product) => {
    setEditProduct(product);
    setOpenModal(true);
  };




  return (
    <>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="md:text-3xl text-md font-bold text-gray-800">Manage Products</h1>
          <button onClick={() => setOpenModal(true)}
            className="bg-blue-500 text-white cursor-pointer px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium">
            Add New Product
          </button>
          {
            openModal && (<ProductModal closeModal={() => { setOpenModal(false); setEditProduct(null); }}FetchAllproducts={FetchAllproducts} editProduct={editProduct} />)
          }
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data?.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-100 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap  text-sm text-gray-900">{product.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">₹ {product.price.toLocaleString("en-IN")}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.stock}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button onClick={() => editHandler(product)} className="text-blue-600 hover:text-blue-800 font-medium mr-3 cursor-pointer"><Edit size={20} /></button>
                      <button onClick={() => deleteHandler(product.id)} className="text-red-600 hover:text-red-800 font-medium cursor-pointer"><Trash2 size={20} /></button>
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

export default Productss
