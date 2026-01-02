import { useEffect, useState } from "react";
import axios from "axios";
import { getData } from "../Context/DataContext";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate()
 
  const { categoryData, } =getData()

  //console.log(categoryData);
  
  
  return (
    <div className="bg-[#101829]">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-center md:justify-around py-7 px-4">
        {categoryData?.slice(0,5)?.map((item) => (
          <button onClick={()=> navigate(`/category/${item.name}`)}
            key={item.id}
            className="uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer"
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
