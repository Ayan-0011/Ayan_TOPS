import { useEffect } from 'react';
import { getData } from '../Context/DataContext'
import FilterSection from '../Components/FilterSection';
import Loading from "../assets/Loading4.webm";
import ProductsCard from '../Components/ProductsCard';


const Products = () => {

  const { data, FetchAllproducts } = getData()


  useEffect(() => {
    FetchAllproducts()
  }, []);

  return (
    <div>
      <div className='w-6xl mx-auto px-4 mb-10'>
        {
          data?.length > 0 ? (
            <div className='flex gap-8'>
              <FilterSection />
              <div className='grid grid-cols-4 gap-8 mt-10 '>
                {
                  data?.map((products, index) => {
                    return <ProductsCard key={index} products={products} />
                  })
                }
              </div>
            </div>
          ) : (
            <div className='flex justify-center items-center w-[400px] mx-auto'>
              <video muted autoPlay loop>
                <source src={Loading} type='video/webm' />
              </video>

            </div>
          )
        }
      </div>
    </div>
  )
}

export default Products
