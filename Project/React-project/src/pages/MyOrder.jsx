import axios from 'axios'
import Lottie from 'lottie-react';
import React, { useEffect, useState } from 'react'
import notfound from '../assets/notfound.json'
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const MyOrder = () => {
  const navigate = useNavigate()


  const [FinalOrder, setFinalOrder] = useState([]);
  const { user, isSignedIn, isLoaded } = useUser();

  //console.log(user);


  const order = async () => {

    if (!isLoaded || !isSignedIn) return;

    try {
      const res = await axios.get(`http://localhost:5000/orders`, { params: { userId: user.id } });
      const myorder = res.data;
      setFinalOrder(myorder)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    order()
  }, [isLoaded, isSignedIn, user?.id]);

  //console.log(FinalOrder);

  const getStatusColor = (status) => {
    const colors = {
      'Delivered': 'bg-green-100 text-green-800',
      'Placed': 'bg-yellow-100 text-yellow-800',
      'Shipped': 'bg-blue-100 text-blue-800',
      'Processing': 'bg-purple-100 text-purple-800',
      'confirmed': 'bg-green-100 text-green-800',
      'Cancelled': 'bg-yellow-100 text-yellow-800',
      'Returned': 'bg-red-100 text-red-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <>
      {FinalOrder.length > 0 ? (
        <div className="min-h-screen w-full bg-gray-100 p-4">
          <div className="max-w-5xl mx-auto space-y-6">
            <button onClick={() => navigate('/cart')} className='bg-gray-300 mb-5 text-black px-3 py-1 rounded-md cursor-pointer flex gap-1 items-center'><ChevronLeft /> Back to Cart </button>

            {FinalOrder.map((order, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-5"  >
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
                    <div key={index} className="flex justify-between items-start text-sm border-b pb-2 last:border-none"  >
                      <div className='flex items-center'>
                        <img src={prod.images[0]} alt={prod.title} className='w-[70px] md:w-[100px]' />
                        <div className='pt-5 p-2'>
                          <span className='pt-0'>Product ID: {prod.id}</span>
                          <h1 className='pt-0 md:text-lg'>Product Name: {prod.min_desc}</h1>
                          <p className='font-semibold py-1'>paymentMethod : {order.paymentMethod}</p>
                          <p className="text-sm text-gray-600">
                            Ordered on:{" "}
                            {new Date(order.createdAt).toLocaleString("en-IN", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit"
                            })}
                          </p>
                        </div>
                      </div>
                      <span className='rounded-lg mt-5 bg-red-500 text-white text-md px-3 py-1'>Qty: {prod.quantity}</span>
                    </div>

                  ))}
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center mt-2 mx-1">
                  <p className="font-semibold md:text-lg text-md text-gray-800">
                    ₹ Total amount : <span className='font-semibold md:text-lg text-red-500'>{order.totalAmount.toLocaleString("en-IN")}</span>
                  </p>
                  <span className={`px-3 py-1 text-xs rounded-full ${getStatusColor(order.status)} `}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}

          </div>
        </div>
      ) : (
        <>
          <h1 className='font-semibold text-3xl text-center text-gray-600'>No Order you Placed  </h1>
          <div className="flex justify-center flex-col items-center h-[500px] w-full">
            <Lottie animationData={notfound} className="w-[400px]" />
            <button onClick={() => navigate('/product')} className='bg-red-500 text-white px-3 py-2 rounded-md cursor-pointer'>Make Shopping</button>
          </div>

        </>
      )}
    </>
  );

}
export default MyOrder
