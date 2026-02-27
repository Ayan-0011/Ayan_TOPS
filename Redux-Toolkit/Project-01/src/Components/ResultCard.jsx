import React from 'react'
import { useDispatch } from 'react-redux'
import { addCollection } from '../redux/features/collectionSlice'
import { toast } from 'react-toastify'

const ResultCard = ({ items }) => {

  const dispatch = useDispatch()

  const AddtoCollection = (items) => {

    dispatch(addCollection(items))
  }
  return (
    <div className='bg-white w-full relative rounded-2xl group  overflow-hidden'>
      <a target='_blank' href={items.url} className='h-full'>
        {items.type == 'photo' ? <img src={items.src} className=' h-full w-full object-cover' /> : ""}
        {items.type == 'video' ? <video autoPlay muted loop src={items.src} className='h-full w-full object-cover'></video> : ""}
        {items.type == 'gif' ? <img src={items.src} className=' h-full w-full object-cover' /> : ""}
      </a>
      <div className=" opacity-0 group-hover:opacity-100 flex justify-between items-center w-full px-3 py-3 absolute bottom-0 bg-gradient-to-t from-black/70 to-transparent text-white">
        <h2 className="text-sm font-semibold line-clamp-2">
          {items.title}
        </h2>

        <button onClick={() => AddtoCollection(items)}
          className="bg-indigo-600 active:scale-95 cursor-pointer rounded px-3 py-1 text-sm">
          Save
        </button>
      </div>
    </div>
  )
}

export default ResultCard
