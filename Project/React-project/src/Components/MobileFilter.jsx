import React, { useEffect } from 'react'
import { FaFilter } from 'react-icons/fa'
import { getData } from '../Context/DataContext';

const MobileFilter = ({ OpenFilter, setOpenFilter, serch, setSerch, Category, setCategory, priceRange, setPriceRange, handlecategoryChange, brand, setBrand, brands }) => {

    const { categoryData, fetchCategories } = getData()

    useEffect(() => {
        fetchCategories()
    }, []);

    const togglefilter = ()=>{
        setOpenFilter(!OpenFilter)
    }

    return (
        <>
            <div className='bg-gray-100 flex justify-between w-[300px] items-center md:hidden px-4 p-2 my-5'>
                <h1 className='font-semibold font-xl'>Filters</h1>
                <FaFilter onClick={() =>togglefilter()} className='text-gray-800' />
            </div>
            {
                OpenFilter ? <div className='bg-gray-100 p-2 md:hidden w-[300px]'>
                    <input type="text"
                        placeholder='Search..'
                        value={serch}
                        onChange={(e) => setSerch(e.target.value)}
                        className='bg-white p-2 rounded-md border-gray-400 border-2 w-full'
                    />
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
                    <h1 className="mt-8 font-semibold text-xl mb-2">Brand</h1>

                    <select value={brand} onChange={(e) => { setBrand(e.target.value); }}
                        className="mt-2 p-2 w-full rounded-md border border-gray-400 bg-white"  >
                        {brands.map((b, index) => (
                            <option key={index} value={b}>
                                {b}
                            </option>
                        ))}
                    </select>
                    <h1 className='mt-10 font-semibold text-xl'>Range</h1>
                    <div className='flex flex-col gap-2 mt-3'>
                        <label>Price Range: {priceRange[0]} - ${priceRange[1]}</label>
                        <input type="range" name="" id="" min={0} max={100000} value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} className='transition-all' />
                    </div>
                    <button
                        onClick={() => { setSerch(''); setCategory("All"); setPriceRange([0, 100000]); setBrand("All"); setOpenFilter(false) }}
                        className='bg-red-500 p-2 text-white rounded-md mx-10 my-5'>Reset Filter</button>
                </div > : null
            }
        </>
    )
}

export default MobileFilter
