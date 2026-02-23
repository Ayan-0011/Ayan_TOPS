import React from 'react'
import { fetchGif, fetchPhotos, fetchVideos } from './Api/mediaApi'
import Serchbar from './Components/Serchbar'
import Tabs from './Components/Tabs'
import ResultGrid from './Components/ResultGrid'

const App = () => {
  return (
    <div className='text-white bg-gray-950 w-full'>
     <Serchbar/>
     <Tabs/>
     <ResultGrid/>

    </div>
  )
}

export default App
