import { useEffect, useState } from 'react';
import { getData } from '../Context/DataContext'
import FilterSection from '../Components/FilterSection';
import Loading from "../assets/Loading4.webm";
import ProductsCard from '../Components/ProductsCard';
import Pagination from '../Components/Pagination';
import Lottie from 'lottie-react';
import notfound from '../assets/notfound.json'
import MobileFilter from '../Components/MobileFilter';



const Products = () => {

  const { data, FetchAllproducts, categoryData, fetchCategories } = getData()
  const [serch, setSerch] = useState("");
  const [Category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [page, setPage] = useState(1);
  const [brand, setBrand] = useState("All");
  const [OpenFilter, setOpenFilter] = useState(false);



  useEffect(() => {
    FetchAllproducts()
    fetchCategories()
  }, []);
  //console.log(data);

  const handlecategoryChange = (e) => {
    setCategory(e.target.value)
    setPage(1)
    setOpenFilter(false)
    //console.log(Category);

  }

  const pageHandler = (seletedpage) => {
    setPage(seletedpage)
    setOpenFilter(false)
  }

  const filteredData = data?.filter((item) =>
    item.title.toLowerCase().includes(serch.toLowerCase()) &&
    (Category === "All" ? true : item.category === Category) &&
    (brand === "All" ? true : item.brand === brand) &&
    item.price >= priceRange[0] && item.price <= priceRange[1]

  )

  const brands = ["All", ...new Set(data?.map(item => item.brand))];
  

  const dynamicPage = Math.ceil(filteredData?.length / 8)


  return (
    <div>
      <div className="max-w-6xl md:mx-auto px-4 mb-10">

        <MobileFilter
          OpenFilter={OpenFilter}
          setOpenFilter={setOpenFilter}
          serch={serch}
          setSerch={setSerch}
          Category={Category}
          setCategory={setCategory}
          setPriceRange={setPriceRange}
          priceRange={priceRange}
          handlecategoryChange={handlecategoryChange}
          brand={brand}
          setBrand={setBrand}
          brands={brands}
        />

        {data?.length > 0 ? (
          <div className="flex gap-8">

            <FilterSection
              serch={serch}
              setSerch={setSerch}
              Category={Category}
              setCategory={setCategory}
              setPriceRange={setPriceRange}
              priceRange={priceRange}
              handlecategoryChange={handlecategoryChange}
              brand={brand}
              setBrand={setBrand}
              brands={brands}
            />

            <div className="flex-1">
              {filteredData.length > 0 ? (
                <>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-7 mt-5">
                    {filteredData.slice(page * 8 - 8, page * 8).map((products, index) => (
                      <ProductsCard key={index} products={products} />
                    ))}
                  </div>

                  <div className="flex justify-center mt-6">
                    <Pagination pageHandler={pageHandler} page={page} dynamicPage={dynamicPage} />
                  </div>
                </>
              ) : (
                <div className="flex justify-center items-center h-[500px] w-[300px] md:h-[600px] md:w-[970px]">
                  <Lottie animationData={notfound}  className="w-[500px]"
                  />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center w-[400px] mx-auto">
            <video muted autoPlay loop>
              <source src={Loading} type="video/webm" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products
