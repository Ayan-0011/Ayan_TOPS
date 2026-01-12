import React, { useContext, useEffect } from 'react'
import { DataContext } from '../Context/DataContext'
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Category from './Category';
import { useNavigate, useParams } from 'react-router-dom';

const Crousel = () => {

  const { data, FetchAllproducts } = useContext(DataContext)
  //console.log(data);

  const navigate = useNavigate();

  useEffect(() => {
    FetchAllproducts()
  }, []);

   const SamplePrevArrow = (props) => {
        const {className, style, onClick} = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:3}}>
                <AiOutlineArrowLeft className='arrows' style={{...style, display: "block", borderRadius:"50px", background:"#f53347" , color:"white" , position:"absolute",top:"-20px", padding:"2px", left:"50px", width:"40px", height:"40px"}} />
            </div>
        )
    }
    const SampleNextArrow = (props) => {
        const {className, style, onClick} = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`}>
                <AiOutlineArrowRight className='arrows' style={{...style, display: "block", borderRadius:"50px", background:"#f53347" , color:"white" , position:"absolute", top:"-20px",  padding:"2px", right:"50px", width:"40px", height:"40px"}} />
            </div>
        )
    }


  var settings = {
    dots: false,
    autoplay:true,
    autoplaySpeed:3000,
    infinite:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<SampleNextArrow to="next"/>,
    prevArrow:<SamplePrevArrow to="prev"/>,
  };

  return (
    <div>
      <Slider {...settings}>
        {
          data?.slice(0,3)?.map((item, index) => {
            return <div key={index} className='bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10'>
              <div className='flex flex-col md:flex-row md:gap-25 gap-15 justify-center md:h-[650px] h-[500px] my-20 md:my-0 items-center px-4'>
                <div className='md:space-y-6 space-y-3'>
                  <h3 className='text-red-500 font-semibold font-sans md:text-md '>Powering Your World with the Best in Electonic</h3>
                  <h1 className='md:text-4xl text-xl font-bold uppercase line-clamp-2 md:line-clamp-3 md:w-[500px] text-white'>{item.title}</h1>
                  <p className='md:w-[500px] line-clamp-3 md:text-lg text-gray-400 pr-7'>{item.long_desc}</p>
                  <button className='bg-gradient-to-r  from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2'
                  onClick={()=> navigate('/product') }>Shop Now</button>
                </div>
                <div>
                  <img src={item.images[0]} alt={item.title} className='object-cover rounded-full w-[500px] hover:scale-105 transition-all shadow-2xl shadow-red-400' />
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
