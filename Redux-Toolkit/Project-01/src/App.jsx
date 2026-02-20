import React from 'react'
import { fetchGif, fetchPhotos, fetchVideos } from './Api/mediaApi'

const App = () => {
  return (
    <div className='h-screen text-white bg-gray-900 w-full'>
      
      <button className='bg-green-400 m-5 p-1.5' onClick={async ()=>{
        const data = await fetchPhotos('cat')
        console.log(data.results);
      }}>Get Photos</button>
      
      <button className='bg-green-400 m-5 p-1.5' onClick={async ()=>{
        const data = await fetchVideos('cat')
        console.log(data.videos)
      }}>Get Videos</button>

      <button className='bg-green-400 m-5 p-1.5' onClick={async ()=>{
        const data = await fetchGif('cat')
        console.log(data.data);
      }}>Get GIF</button>

    </div>
  )
}

export default App
