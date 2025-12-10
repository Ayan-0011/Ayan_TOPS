import React, { useEffect } from 'react'
import { getData } from '../Context/DataContext';

const FilterSection = () => {

  const { categoryData, fetchCategories } = getData()

  useEffect(() => {
    fetchCategories()
  }, []);

  //console.log(categoryData);



  return (
    <div className='bg-gray-300 mt-5 p-4 rounded-md h-[530px] filterbae'>
      <input type="text" placeholder='Serch...' className='p-2 bg-white border-2 border-gray-400 rounded-md' />

      {/* category only data */}
      <h1 className='mt-5 font-semibold text-xl'>Category</h1>
      <div className="flex flex-col gap-2  mt-3">

        <div className='flex gap-2'>
          <input type="checkbox" name="" id="" value="All" />
          <button>All</button>
        </div>

        {
          categoryData.map((item, index) => {
            return <div key={index} className='flex gap-2'>
              <input type="checkbox" />
              <button className='uppercase'>{item.name}</button>
            </div>
          })
        }
      </div>
      <h1 className='mt-5 font-semibold text-xl'>Range</h1>
      <div className='felx flex-col gap-2 mt-3'>
        <label>Price Range: $0-$500</label>
        <input type="range" name="" id="" />
      </div>
      <button className='bg-red-500 p-2 text-white rounded-md mx-10 my-5'>Reset Filter</button>
    </div>
  )
}

export default FilterSection
