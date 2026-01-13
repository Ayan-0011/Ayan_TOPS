import React from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../Context/CartContext'
import { useUser } from "@clerk/clerk-react";


const ProductsCard = ({ products }) => {

    const { isSignedIn } = useUser();
    const { user } = useUser();

    const role = user?.publicMetadata?.role === "admin";

    const navigate = useNavigate()
    const { addToCart, cartitem } = useCart()
    //console.log(cartitem);

    return (

        <div className='border relative border-gray-100 rounded-2xl my-3 my-2 cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 md:h-max h-[300px] w-[150px] md:w-[200px]'>
            <img src={products.images[0]} alt="not found" className='bg-gray-100 md:aspect-square object-container md:h-[150px] md:w-full h-[100px] w-[130px]' onClick={() => navigate(`/products/${products.id}`)} />
            <h1 className='line-clamp-1 p-1 font-semibold'>{products.title}</h1>
            <p className='my-1 text-lg text-gray-800 font-bold p-1'>₹{products.price.toLocaleString("en-IN")}</p>
            {!role ? (
                <button onClick={!isSignedIn ? () => navigate("/cart") : () => addToCart(products)}
                    className="bg-red-500 px-1 w-full py-2 text-md rounded-md text-white cursor-pointer flex gap-2 items-center justify-center font-semibold" >
                    <IoCartOutline className="w-6 h-6" />
                    Add to cart
                </button>
            ) : null}
        </div>
    )
}

export default ProductsCard
