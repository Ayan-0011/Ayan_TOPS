import React, { useContext, useEffect } from 'react'
import { DataContext } from '../Context/DataContext'
import Slider from "react-slick";

const Crousel = () => {

  const { data, FetchAllproducts } = useContext(DataContext)
  console.log(data);


  useEffect(() => {
    FetchAllproducts()
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {
          data?.slice(0, 3)?.map((item, index) => {
            return <div key={index} className='bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10'>
              <div className='flex flex-col md:flex-row gap-25 justify-center h-[600px] my-20 md:my-0 items-center px-4'>
                <div className='md:space-y-6 space-y-3'>
                  <h3 className='text-red-500 font-semibold font-sans text-sm'>Powering Your World with the Best in Electronics</h3>
                  <h1 className='md:text-4xl text-xl font-bold uppercase line-clamp-2 md:line-clamp-3 md:w-[500px] text-white'>{item.title}</h1>
                  <p className='md:w-[500px] line-clamp-3 text-gray-400 pr-7'>{item.description}</p>
                  <button className='bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2'>Shop Now</button>
                </div>
                <div>
                  <img src={item.category.image} alt={item.title} className='object-cover rounded-full w-[500px] hover:scale-105 transition-all shadow-2xl shadow-red-400' />
                </div>
              </div>
            </div>
          })
        }


      </Slider>

    </div>
  )
}

export default Crousel
