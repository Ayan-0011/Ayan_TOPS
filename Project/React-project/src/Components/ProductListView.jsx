import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../Context/CartContext'
import { useUser } from '@clerk/clerk-react'

const ProductListView = ({ product }) => {

  const { user } = useUser();
  const navigate = useNavigate()
  const { addToCart } = useCart()
  //console.log(product);


  const getFutureDayDate = (daysToAdd) => {
    const d = new Date();
    d.setDate(d.getDate() + daysToAdd);

    return d.toLocaleDateString("en-IN", {
      weekday: "short", 
      day: "numeric",  
      month: "short"   
    });
  };

  const role = user?.publicMetadata?.role === "user";


  return (
    <div className='space-y-4 mt-2 rounded-md  line-clamp-1'>
      <div className='bg-gray-100 flex gap-7 items-center p-2 rounded-md'>
        <img src={product.images[0]} alt={product.title} className='md:h-60 md:w-60 h-25 w-25 object-cover rounded-md cursor-pointer' onClick={() => navigate(`/products/${product.id}`)} />
        <div className='space-y-4'>
          <h1 className='font-bold md:text-xl text-sm line-clamp-3 hover:text-red-400 md:w-full w-[220px]'>{product.title}</h1>
          <p className='font-semibold flex items-center md:text-lg text-sm'>₹<span className='md:text-2xl text-2xl px-1'>{product.price.toLocaleString("en-IN")}</span>({product.discount}% off)</p>
          <p className='text-sm'>FREE delivery <span className='font-semibold'>{getFutureDayDate(2)}</span> <br />
            Or fastest delivery <span className='font-semibold'>{getFutureDayDate(1)}</span></p>
            {
              (role ? 
                <button onClick={() => addToCart(product)} className='bg-red-500 text-white cursor-pointer px-3 py-1 rounded-md'>Add to Cart</button>
                :null
              ) 
            }
        </div>
      </div>
    </div>
  )
}

export default ProductListView