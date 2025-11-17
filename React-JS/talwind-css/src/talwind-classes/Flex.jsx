import React from 'react'

const Flex = () => {
  return (
    <>
      <div className='bg-gray-800 text-white px-15 py-10'>
        <p className='text-2xl font-medium mx-30 '>Flexbox se items row ya column me arrange hote hain, center hote hain, evenly space hote hain.</p>
      </div>

      <div class="flex flex-col gap-4">
        <div class="bg-blue-300 p-4">Item 1</div>
        <div class="bg-blue-300 p-4">Item 2</div>
      </div>

      <p className='flex justify-center font-stretch-50% p-5 text-blue-700'>justifys</p>
      <div class="flex justify-center-safe gap-4 mb-5">
        <div class="p-4 bg-red-300">A</div>
        <div class="p-4 bg-red-300">B</div>
      </div>
      <div class="flex items-center gap-4 h-50 bg-emerald-800">
      <p className='text-2xl ml-10 font-semibold text-white'>align item = items only  </p>
        <div class="h-20 w-20 bg-green-300 p-6">One</div>
        <div class="h-20 w-20 bg-green-300 p-6">Two</div>
      </div>

      <div class="flex justify-between items-center bg-gray-400 text-amber-300  p-4 rounded-xl my-8">
        <h1 class="text-xl font-bold">Logo</h1>
        <div class="flex gap-10">
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>


      <div class="flex items-center justify-center gap-6 bg-purple-200 p-6 rounded-xl my-5">
        <div class="bg-white p-4 rounded-2xl shadow">Box 1</div>
        <div class="bg-white p-4 rounded-xl shadow">Box 2</div>
        <div class="bg-white p-4 rounded-full shadow">Box 3</div>
      </div>
    </>
  )
}

export default Flex
