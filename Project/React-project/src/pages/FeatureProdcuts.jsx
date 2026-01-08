import React, { useEffect, useState } from 'react'
import { getData } from '../Context/DataContext'
import { useCart } from '../Context/CartContext';
import CategoryBanners from './CategoryBanners';
import { useNavigate } from 'react-router-dom';

const FeatureProdcuts = () => {

  const { data, FetchAllproducts } = getData();

  const { addToCart } = useCart();
  const navigate = useNavigate()


  useEffect(() => {
    FetchAllproducts();
  }, [])
  return (
    <div>
      <section className="px-6 py-14 bg-gray-50">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-sans"> Featured Products</h2>
          <p className="text-gray-500 mt-2">
            Handpicked products just for you
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data?.slice(9, 13)?.map((item) => (
            <div onClick={() => navigate(`/products/${item.id}`)}
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 group overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className=" px-10 object-cover group-hover:scale-110 transition duration-300"
                />

                {/* Discount Badge */}
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                  SALE
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-lg line-clamp-1">
                  {item.title}
                </h3>

                {/* Rating */}
                <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                  {item.long_desc}
                </p>

                {/* Price */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xl font-bold text-gray-900">
                    ₹{item.price.toLocaleString("en-IN")}
                  </span>
                  <p className='text-gray-100 text-sm rounded-full px-2 py-1 bg-red-500'>{item.discount}% off </p>
                </div>

                {/* Button */}
                <button onClick={() => addToCart(item)} className="mt-4 w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>

  )
}

export default FeatureProdcuts
