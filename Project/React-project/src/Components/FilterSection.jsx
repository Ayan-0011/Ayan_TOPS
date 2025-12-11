import React, { useEffect } from 'react'
import { getData } from '../Context/DataContext';

const FilterSection = ({ serch, setSerch, Category, setCategory, priceRange, setPrinceRange, handlecategoryChange }) => {

  const { categoryData, fetchCategories } = getData()

  useEffect(() => {
    fetchCategories()
  }, []);

  //console.log(categoryData);


  return (
    <div className='bg-gray-300 mt-5 p-4 rounded-md'>
      <input type="text" placeholder='Serch...' value={serch} onChange={(e) => setSerch(e.target.value)}
        className='p-2 bg-white border-2 border-gray-400 rounded-md' />

      {/* category only data */}
      <h1 className='mt-5 font-semibold text-xl'>Category</h1>
      <div className="flex flex-col gap-2  mt-3">

      
        <div className='flex gap-2'>
          <input type="checkbox" checked={Category === "All"} value="All" onChange={handlecategoryChange} />
          <button onClick={() => setCategory("All")}>All</button>
        </div>

        {
          categoryData?.map((item, index) => {
            return <div key={index} className='flex gap-2'>
              <input type="checkbox" name={item} checked={Category === item.name} value={item.name} onChange={handlecategoryChange} />
              <button onClick={() => setCategory(item.name)} className='uppercase'>{item.name}</button>
            </div>
          })
        }
      </div>
      <h1 className='mt-5 font-semibold text-xl'>Range</h1>
      <div className='flex flex-col gap-2 mt-3'>
        <label>Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
        <input type="range" name="" id="" value={priceRange[1]} onChange={(e) => setPrinceRange([priceRange[0], Number(e.target.value)])} className='transition-all' />
      </div>
      <button
        onClick={() => { setSerch(''); setCategory("All"); setPrinceRange([0, 100]) }}
        className='bg-red-500 p-2 text-white rounded-md mx-10 my-5'>Reset Filter</button>
    </div>
  )
}

export default FilterSection
