import React from 'react'

const ResultCard = ({ items }) => {
  return (
    <div className='bg-white w-[17vw] relative h-65 rounded'>
      <a target='_blank' href={items.url} className='h-full'>
        {items.type == 'photo' ? <img src={items.src} className=' h-full w-full object-cover' /> : ""}
        {items.type == 'video' ? <video autoPlay muted loop src={items.src} className='h-full w-full object-cover'></video> : ""}
        {items.type == 'gif' ? <img src={items.src} className=' h-full w-full object-cover' /> : ""}
      </a>
      <div id='bottom' className="absolute bottom-0 h-[35%] w-full px-2 py-4 text-white">
        <h2 className='text-xl font-semibold capitalize'>{items.title}</h2>
      </div>
    </div>
  )
}

export default ResultCard
