import { useEffect, useState } from "react";
import axios from "axios";
import { getData } from "../Context/DataContext";
import { Link } from "react-router-dom";

const Cardofcategory = () => {
 
  const { categoryData, fetchCategories, } =getData()

 useEffect(() => {
    fetchCategories()
  }, []);

  //console.log(categoryData);
  
  
  return (
    <div className="bg-[#101829] h-[450px]">
        <h1 className="text-white text-center font-sans text-2xl m-10 ">Top Products</h1>
      <div className="max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-center py-1 px-4">
        {categoryData?.slice(0,4)?.map((item) => (
         <Link to={'/product'}> <div key={item.id} className="uppercase bg-gray-200 text-black rounded-md cursor-pointer w-[300px] h-[330px] flex items-center flex-col justify-center mb-10 hover:border-blue-500 border-2 border-x-4 transition-all" >
            <img src={item.image} alt="no"  className="h-3/4  rounded-3xl mt-5" />
            <button className=" font-semibold text-black m-1 p-2 text-md"> {item.name} </button>
          </div></Link> 
        ))}
      </div>
    </div>
  );
};

export default Cardofcategory;
