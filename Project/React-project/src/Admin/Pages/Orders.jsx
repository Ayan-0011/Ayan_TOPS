import axios from 'axios';
import { Edit, Edit3, Eye } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import OrderModal from '../Components/OrderModal';

const Orders = () => {

  const [Myorders, setMyOrders] = useState([]);

  const [openModal, setOpenModal] = useState(false);

  const [selectedOrderId, setSelectedOrderId] = useState(null);

  // orders data 
  const orders = async () => {
    const orders = await axios.get("http://localhost:5000/orders")
    setMyOrders(orders.data)
    //console.log(Myorders);
  }


  useEffect(() => {
    orders()
  }, []);

  const updateOrderStatus = async (order, newStatus) => {
    try {
      await axios.put(
        `http://localhost:5000/orders/${order.id}`,
        {
          ...order,
          status: newStatus
        }
      );

      // UI update without refetch
      setMyOrders(prev =>
        prev.map(o =>
          o.id === order.id ? { ...o, status: newStatus } : o
        )
      );
    } catch (error) {
      console.error("Status update failed", error);
    }
  };


  const getStatusColor = (status) => {
    const colors = {
      'Delivered': 'bg-green-100 text-green-900',
      'Placed': 'bg-yellow-100 text-yellow-900',
      'Shipped': 'bg-blue-100 text-blue-900',
      'Processing': 'bg-purple-100 text-purple-900',
      'confirmed': 'bg-green-100 text-green-900',
      'Cancelled': 'bg-yellow-100 text-yellow-900',
      'Returned': 'bg-red-100 text-red-900',
    };
    
    return colors[status] || 'bg-gray-100 text-gray-800';
  };


  return (
    <>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="md:text-3xl text-md font-bold text-gray-800">Manage Orders</h1>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 cursor-pointer transition-colors font-medium">
            Export Orders
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Show Orders</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Myorders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-100 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.username}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {order.items.map((item, idx) => (
                        <div key={item.id}>{idx + 1} - {item.title}</div>
                      ))}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">₹ {order.totalAmount.toLocaleString("en-IN")}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={order.status}
                        onChange={(e) => updateOrderStatus(order, e.target.value)}
                        className={`px-3 py-1 text-xs font-medium rounded-full cursor-pointer ${getStatusColor(order.status)}`}>
                        <option value="Placed">Placed</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="confirmed ">confirmed</option>
                        <option value="Cancelled">Cancelled</option>
                        <option value="Returned">Returned</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{
                      new Date(order.createdAt).toLocaleString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                      })
                    }</td>
                    <td className="px-6 text-center py-4 whitespace-nowrap text-sm">
                      <button onClick={() => { setSelectedOrderId(order.id); setOpenModal(true); }} className="text-blue-600 hover:text-blue-800 font-medium mr-3 cursor-pointer"><Eye size={25} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {openModal && selectedOrderId && (
              <OrderModal
                order_id={selectedOrderId}
                closeModal={() => {
                  setOpenModal(false);
                  setSelectedOrderId(null);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Orders
