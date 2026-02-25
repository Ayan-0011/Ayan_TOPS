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
    <div className='px-10 py-6 '>
      {
        items.length > 0 ?
          <div className='flex justify-between mb-5'>
            <h2 className='font-semibold text-2xl'>Your Collections: {items.length}</h2>
            <button onClick={() => clearall()} className='bg-red-700 active:scale-95 px-4 py-2 rounded-full cursor-pointer'>Clear Collections</button>
          </div>
          : 
           <h2 className='font-semibold text-center text-4xl'>Collections is Empty</h2>
      }


      <div className='flex justify-start w-full flex-wrap gap-6 h-auto'>
        {
          items.map((items) => {
            return (
              <div>
                <CollectionCard items={items} />
              </div>
            )
          })

        }
      </div>
    </div>
  )
}

export default CollectioPage