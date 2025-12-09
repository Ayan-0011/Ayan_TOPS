import { useEffect, useState } from "react";
import axios from "axios";

const Category = () => {
  const [data, setData] = useState([]);

  
  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/categories"
      );

      
      setData(response.data); // ✅ correct
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="bg-[#101829]">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-center md:justify-around py-7 px-4">
        {data?.slice(0,5)?.map((item) => (
          <button
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
