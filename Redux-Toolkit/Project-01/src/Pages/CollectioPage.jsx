import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../Components/CollectionCard'
import { clearCollection } from '../redux/features/collectionSlice'
import { toast } from 'react-toastify'

const CollectioPage = () => {

  const { items } = useSelector((state) => state.collection)

  const dispatch = useDispatch()

  const clearall = () => {
    dispatch(clearCollection())
    toast.success("your Collection is Clear")
  }

  return (
    <div className='md:px-10 px-5 py-6 '>
      {
        items.length > 0 ?
          <div className='flex justify-between mb-5'>
            <h2 className='font-semibold md:text-2xl'>Your Collections: {items.length}</h2>
            <button onClick={() => clearall()} className='bg-red-700 active:scale-95 md:px-4 md:py-2 py-1 px-2 rounded-full cursor-pointer'>Clear Collections</button>
          </div>
          :
          <h2 className='font-semibold text-center md:text-4xl text-2xl'>Collections is Empty</h2>
      }

      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-3 px-5 py-5">
        { items.map((items, idx) => (
          <div key={idx} className="mb-4 break-inside-avoid">
            <CollectionCard items={items}  />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CollectioPage