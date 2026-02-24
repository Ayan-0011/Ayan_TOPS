import React from 'react'

const ResultCard = ({ items }) => {
  return (
    <div className='bg-white w-[17vw] relative h-65 rounded'>
      <a target='_blank' href={items.url} className='h-full'>
        {items.type == 'photo' ? <img src={items.src} className=' h-full w-full object-cover' /> : ""}
        {items.type == 'video' ? <video autoPlay muted loop src={items.src} className='h-full w-full object-cover'></video> : ""}
        {items.type == 'gif' ? <img src={items.src} className=' h-full w-full object-cover' /> : ""}
      </a>
      <div id='bottom' className='flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white'>
                <h2 className='text-lg font-semibold capitalize h-14 overflow-hidden'>{items.title}</h2>
                <button
                    className='bg-indigo-600 active:scale-95 text-white rounded px-3 py-1 cursor-pointer font-medium'>
                    Save
                </button>
            </div>
    </div>
  )
}

export default ResultCard
