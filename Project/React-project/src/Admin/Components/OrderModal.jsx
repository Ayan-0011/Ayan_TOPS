import axios from 'axios';
import React, { useEffect, useState } from 'react'

const OrderModal = ({ closeModal, order_id, }) => {

    const [myorders, setMyorders] = useState([]);

    const order_data = async (id) => {
        const res = await axios.get(`http://localhost:5000/orders`)
        const data = res.data.find(item => item.id === id)
        setMyorders(data)
        //console.log(data);

    }

    useEffect(() => {
        if (order_id) {
            order_data(order_id);
        }
    }, [order_id]);

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
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-100'>
            <div className="bg-white w-[500px]  rounded-lg p-6 relative">
                {/* Close Button */}
                <button onClick={closeModal} className="absolute top-2 right-2 text-xl" >
                    ✖
                </button>

                <div className="space-y-4">

                    {/* User Info */}
                    <div className="border-b flex justify-between items-end pb-3">
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">
                                {myorders.username}
                            </h2>
                            <p className="text-sm text-gray-500">
                                Order ID: #{myorders.id}
                            </p>
                            <p className="text-sm text-gray-500">
                                Ordered On: {new Date(myorders.createdAt).toLocaleString()}
                            </p>
                        </div>
                        <div className={`w-[85px] rounded-2xl px-2 text-black p-2 text-center ${getStatusColor(myorders.status)}`}>
                            {myorders.status}
                        </div>
                    </div>

                    {/* Ordered Items */}
                    <div className="space-y-3 max-h-[300px] overflow-y-auto">
                        {myorders?.items?.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex gap-4 border rounded-lg p-3 shadow-sm hover:shadow-md transition"
                            >
                                <img
                                    src={item.images[0]}
                                    alt={item.title}
                                    className="w-16 h-16 object-cover rounded-md"
                                />

                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-800">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        Price: ₹{item.price}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Quantity: {item.quantity}
                                    </p>
                                </div>

                                <div className="font-semibold text-gray-800">
                                    ₹{item.price * item.quantity}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Total */}
                    <div className="border-t pt-3 flex justify-between items-center">
                        <span className="font-semibold text-lg">Total Amount</span>
                        <span className="text-xl font-bold text-green-600">
                            ₹{myorders.totalAmount}
                        </span>
                    </div>

                </div>



            </div>
        </div>
    )
}

export default OrderModal
