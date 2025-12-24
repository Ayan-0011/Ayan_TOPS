import axios from 'axios'
import Lottie from 'lottie-react';
import React, { useEffect, useState } from 'react'
import notfound from '../assets/notfound.json'

const MyOrder = () => {

    const [FinalOrder, setFinalOrder] = useState([]);

    const order = async () => {
        try {
            const res = await axios.get("http://localhost:5000/orders")
            const myorder = res.data;
            setFinalOrder(myorder)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        order()
    }, []);

    //console.log(FinalOrder);

    return (
  <>
    {FinalOrder.length > 0 ? (
      <div className="min-h-screen w-full bg-gray-100 p-4">
        <div className="max-w-5xl mx-auto space-y-6">

          {FinalOrder.map((order, idx) => (
            <div key={idx}  className="bg-white rounded-xl shadow-md p-5"  >
              {/* Order Header */}
              <div className="flex justify-between mb-3">
                <h1 className="font-semibold text-lg">
                  Order #{order.id}
                </h1>
                <span className="text-sm text-gray-500">
                  {order.orderDate}
                </span>
              </div>

              {/* Items */}
              <div className="space-y-1">
                {order.items.map((prod, index) => (
                  <div key={index} className="flex justify-between items-center text-sm border-b pb-2 last:border-none"  >
                    <div className='flex items-center'>
                      <img src={prod.images} alt={prod.title} className='w-[100px]' />
                      <span>Product ID: {prod.productId}</span>
                    </div>
                    <span>Qty: {prod.quantity}</span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center mt-4">
                <p className="font-semibold text-red-500">
                  ₹{order.totalAmount}
                </p>
                <span className={`px-3 py-1 text-xs rounded-full
                  ${
                    order.status === "confirmed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {order.status}
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
    ) : (
      <div className="flex justify-center items-center h-[500px] w-full">
        <Lottie animationData={notfound} className="w-[400px]" />
      </div>
    )}
  </>
);

}
    export default MyOrder
