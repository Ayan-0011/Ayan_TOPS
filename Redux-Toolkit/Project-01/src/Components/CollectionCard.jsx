import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection } from '../redux/features/collectionSlice'
import { toast } from 'react-toastify'

const CollectionCard = ({ items }) => {

    const dispatch = useDispatch()

    const removeitems = (items) => {
        dispatch(removeCollection(items))
        toast.success("removed Items")
    }

    return (
        <div className='bg-white w-full relative rounded-2xl group overflow-hidden'>
            <a target='_blank' href={items.url} className='h-full'>
                {items.type == 'photo' ? <img src={items.src} className=' h-full w-full object-cover' /> : ""}
                {items.type == 'video' ? <video autoPlay muted loop src={items.src} className='h-full w-full object-cover'></video> : ""}
                {items.type == 'gif' ? <img src={items.src} className=' h-full w-full object-cover' /> : ""}
            </a>
            <div id='bottom' className='opacity-0 group-hover:opacity-100 flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white'>
                <h2 className="text-sm font-semibold line-clamp-2">
                    {items.title}
                </h2>
                <button onClick={() => {
                    removeitems(items)
                }}
                    className='bg-red-600 active:scale-95 text-white rounded px-3 py-1 cursor-pointer font-medium'>
                    remove
                </button>
            </div>
        </div>
    )
}

export default CollectionCard
