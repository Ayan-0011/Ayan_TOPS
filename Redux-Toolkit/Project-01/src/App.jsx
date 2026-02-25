import React from 'react'
import { fetchGif, fetchPhotos, fetchVideos } from './Api/mediaApi'
import Serchbar from './Components/Serchbar'
import Tabs from './Components/Tabs'
import ResultGrid from './Components/ResultGrid'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import CollectioPage from './Pages/CollectioPage'
import Navbar from './Components/Navbar'
import { Bounce, ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div className='text-white bg-gray-950 w-full min-h-screen'>

      <Navbar />
      <ToastContainer position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<CollectioPage />} />
        <Route path='*' element={<h1 className='text-center text-4xl font-extrabold mt-20'>404 Not Found</h1>} />
      </Routes>

    </div>
  )
}

export default App
