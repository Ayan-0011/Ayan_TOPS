import { useUser } from '@clerk/clerk-react';
import axios from 'axios'
import { Edit, Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const Users = () => {
  const [allusers, setAllUsers] = useState([]);
  const [orders, setOrders] = useState([]);



  const User = async () => {
    const my_user = await axios.get("http://localhost:5000/users")
    setAllUsers(my_user.data)
    //console.log(allusers);
  }

  const myOrders = async () => {
    const res = await axios.get("http://localhost:5000/orders")
    setOrders(res.data)
    console.log(res.data);

  }

  const deleteHandler = async (id) => {
    const check = confirm("Do You want delete")
    if (check) {
      const del_user = await axios.delete(`http://localhost:5000/users/${id}`)
      toast.success("User deleted successfully");
    }
    User();
    return false;
  }
  
  const getUserOrderCount = (userId) => {
    return orders.filter(order => order.userId === userId).length;
  };




  useEffect(() => {
    User();
    myOrders();
  }, []);


  return (
    <>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="md:text-3xl text-md font-bold text-gray-800">Manage Users</h1>
          <button className="bg-blue-500 text-white px-6 py-2 cursor-pointer rounded-lg hover:bg-blue-600 transition-colors font-medium">
            Add New User
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {allusers.map((item, idx) => (
                  <tr key={item.id} className="hover:bg-gray-100 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${item.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}`}>
                        {item.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(item.createdAt).toLocaleString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit"
                    })
                    }</td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm text-gray-90 ${item.role === 'admin' ? 'opacity-0 pointer-events-none' :''  }`}>{getUserOrderCount(item.user_id)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm ">
                      <button className="text-blue-600 hover:text-blue-800 font-medium mr-3 cursor-pointer"><Edit size={20}/></button>
                      <button onClick={() => deleteHandler(item.id)} className="text-red-600 hover:text-red-800 font-medium cursor-pointer"><Trash2 size={20}/></button>
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

export default Users
