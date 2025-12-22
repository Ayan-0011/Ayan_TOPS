import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../assets/Loading4.webm'
import { ChevronLeft } from 'lucide-react';
import ProductListView from '../Components/ProductListView';

const Category_products = () => {
    const [Category_products, setCategory_products] = useState([]);
    const navigate = useNavigate()

    const { category } = useParams()

    const catedata = async () => {

        try {
            const res = await axios.get("/data/Product.json");
            const filterproducts = res.data.filter(item => item.category === category)
            setCategory_products(filterproducts)
            console.log(filterproducts);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        catedata()
    }, [category]);

    return (
        <>
            {
                Category_products.length > 0 ? <div className='max-w-6xl mx-auto mt-10 mb-10 px-4'>
                    <h2 className="text-xl font-bold mb-4 text-red-500">
                        Category: {category}
                    </h2>
                    <button onClick={() => navigate('/')} className='bg-gray-800 mb-5 text-white px-3 py-1 rounded-md cursor-pointer flex gap-1 items-center'><ChevronLeft /> Back</button>
                    {
                        Category_products.map((product, index) => {
                            return <ProductListView key={index} product={product} category={category} />
                        })
                    }
                </div> :
                    <div className='flex items-center justify-center h-[400px]'>
                        <video muted autoPlay loop>
                            <source src={Loading} type='video/webm' />
                        </video>
                    </div>
            }
        </>
    )
}

export default Category_products
