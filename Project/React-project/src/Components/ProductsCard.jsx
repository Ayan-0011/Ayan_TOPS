import React from 'react'
import {IoCartOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'


const ProductsCard = ({ products }) => {
   const  navigator =useNavigate()
    return (
      
        <div className='border relative border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max'>
            <img src={products.images} alt="not found" className='bg-gray-100 aspect-square' onClick={()=>navigator(`/products/${products.id}`)} />
            <h1 className='line-clamp-2 p-1 font-semibold'>{products.title}</h1>
            <p className='my-1 text-lg text-gray-800 font-bold p-1'>${products.price}</p>
            <button className='bg-red-500 px-3 w-full py-2 text-lg rounded-md text-white cursor-pointer flex gap-2 items-center justify-center font-semibold'><IoCartOutline className="w-6 h-6" /> Add to cart</button>
        </div>
    )
}

export default ProductsCard
