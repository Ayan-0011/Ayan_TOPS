import axios from 'axios';
import React, { useEffect, useState } from 'react'

const RecentActivity = () => {

    const [Myorders, setMyOrders] = useState([]);

      // orders data 
  const orders = async () => {
    const orders = await axios.get("http://localhost:5000/orders")
    setMyOrders([...orders.data].reverse());
    //console.log(Myorders);
  }

  useEffect(() => {
      orders();
    }, []);  

    const getStatusColor = (status) => {
    const colors = {
      'Delivered': 'bg-green-100 text-green-800',
      'Placed': 'bg-yellow-100 text-yellow-800',
      'Shipped': 'bg-blue-100 text-blue-800',
      'Processing': 'bg-purple-100 text-purple-800',
      'confirmed': 'bg-green-100 text-green-800',
      'Low Stock': 'bg-yellow-100 text-yellow-800',
      'Out of Stock': 'bg-red-100 text-red-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };


    return (
        <div>
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
                <div className="space-y-4">
                    {Myorders.slice(0, 4).map((order, index) => (
                        <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span className="text-blue-600 font-bold">📦</span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-800">{order.username}</p>
                                    <p className="text-xs text-gray-500">{
                                        order.items.map((item, idx) => {
                                            return <>
                                                {idx + 1} - {item.title} <br />
                                            </>
                                        })
                                    }</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-bold text-gray-800">₹ {order.totalAmount.toLocaleString("en-IN")}</p>
                                <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(order.status)}`}>
                                    {order.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RecentActivity
