import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../assets/Loading4.webm'
import Breadcrums from '../Components/Breadcrums ';
import { IoCartOutline } from 'react-icons/io5';
import { useCart } from '../Context/CartContext';


const SingleProduct = () => {
    const [activeImg, setActiveImg] = useState(0);
    const [SingleProduct, setSingleProduct] = useState("");
    const params = useParams()
    const { addToCart } =useCart()
    const navigator = useNavigate()
    //console.log(params);

    const getSingleProduct = async () => {

        try {
           const responce = await axios.get("/data/Product.json");
           const product = responce.data.find(item => item.id === Number(params.id));
           setSingleProduct(product)
           //console.log(product);
           
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSingleProduct()
    }, [params.id]);

    //const orignalprice = Math.round(SingleProduct.price + (SingleProduct.price * SingleProduct.price / 33))

    const price = SingleProduct.price
    //orignal price 

    const discountPercent = Math.floor((30 - 20 + 1)) 
    //discountpercenterg mila 

    const originalPrice = Math.round(price / (1 - discountPercent / 100))
    // discount mese minus hoke discounted price mila

    return (
        <>
            {
                SingleProduct ? <div className='px-4 pb-4 md:px-0'>
                    < Breadcrums title={SingleProduct.title} />
                    <div className='max-w-6xl mx-auto md:p-6 grid grid-cols-1 md:grid-cols-2 gap-10'>
                        {/* product image */}

                        <div className="w-full">
                            <img src={SingleProduct.images?.[activeImg]} alt={SingleProduct.title} className="w-full h-[500px] p-10 object-cover  rounded-2xl" />

                            <div className="flex gap-4 mt-4 justify-center">
                                {SingleProduct.images?.slice(0, 3).map((img, index) => (
                                    <img key={index} src={img} alt="product option" onClick={() => setActiveImg(index)}
                                        className={`w-15 h-15 object-cover p-2 rounded-full cursor-pointer border-2
                                    ${activeImg === index ? "border-red-500" : "border-gray-300"}`} />
                                ))}
                            </div>
                        </div>


                        {/* product details */}
                        <div className='flex flex-col gap-6'>
                            <h1 className='md:text-3xl text-xl font-bold text-gray-800'>{SingleProduct.title}</h1>
                            <div className='text-gray-700'>{SingleProduct.title?.toUpperCase()} / {SingleProduct.name?.toUpperCase()}</div>
                            <p className='text-red-500 text-xl font-bold'>₹{SingleProduct.price}
                                <span className='line-through text-gray-700 mx-1'>{originalPrice}</span>
                                <span className='text-white bg-red-500 px-4 py-1 rounded-2xl'>${discountPercent + "% OFF"}</span></p>
                            <p className='text-gray-600'>{SingleProduct.description}</p>

                            {/* qunatity selector */}
                            <div className='flex items-center gap-4'>
                                <label htmlFor="" className='text-sm font-medium text-gray-700'>Quantity:</label>
                                <input type="number" min={1} className='w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 foucs:ring-red-500' />
                            </div>

                            <div className='flex gap-4 mt-4'>
                                <button onClick={()=> addToCart(SingleProduct)} className='px-6 flex gap-2 py-2 text-lg bg-red-500 text-white rounded-md cursor-pointer'><IoCartOutline className='w-6 h-6' /> Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div > :

                    <div className='flex justify-center items-center h-screen'>
                        <video muted autoPlay loop>
                            <source src={Loading} type='video/webm' />
                        </video>
                    </div>
            }
        </>
    )
}

export default SingleProduct
