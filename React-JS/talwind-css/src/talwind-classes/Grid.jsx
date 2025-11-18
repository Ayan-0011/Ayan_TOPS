import React from 'react'

const Grid = () => {
    return (
        <>
            <h1 className='text-2xl font-semibold flex justify-center my-5'>Grid system</h1>
            <hr />
            <div class="grid grid-cols-12 gap-4 my-2 text-center text-white">
                <div class="col-span-2 bg-gray-800 p-4">1</div>
                <div class="col-span-8 bg-gray-800 p-4">2</div>
                <div class="col-span-2 bg-gray-800 p-4">3</div>
            </div>

            <div class="grid grid-cols-12 gap-4">
                <div class="col-span-3 bg-blue-200 p-4">Sidebar</div>
                <div class="col-span-9 bg-blue-100 p-4">Main</div>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 my-4 text-center">
                <div class="bg-green-300 p-4">Box</div>
                <div class="bg-green-300 p-4">Box</div>
                <div class="bg-green-300 p-4">Box</div>
                <div class="bg-green-300 p-4">Box</div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                <div class="bg-gray-600 text-cyan-100 text-center p-4 rounded shadow">Product 1</div>
                <div class="bg-gray-600 text-cyan-100 text-center p-4 rounded shadow">Product 2</div>
                <div class="bg-gray-600 text-cyan-100 text-center p-4 rounded shadow">Product 3</div>
                <div class="bg-gray-600 text-cyan-100 text-center p-4 rounded shadow">Product 4</div>
                <div class="bg-gray-600 text-cyan-100 text-center p-4 rounded shadow">Product 4</div>
                <div class="bg-gray-600 text-cyan-100 text-center p-4 rounded shadow">Product 4</div>
                <div class="bg-gray-600 text-cyan-100 text-center p-4 rounded shadow">Product 4</div>
                <div class="bg-gray-600 text-cyan-100 text-center p-4 rounded shadow">Product 4</div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-6'>
                <div className='bg-blue-500 text-teal-200 text-center rounded shadow p-5 h-40'> card- 1</div>
                <div className='bg-blue-500 text-teal-200 text-center rounded shadow p-5 h-25'> card- 1</div>
                <div className='bg-blue-500 text-teal-200 text-center rounded shadow p-5 h-33'> card- 1</div>
                <div className='bg-blue-500 text-teal-200 text-center rounded shadow p-5 h-50'> card- 1</div>
            </div>

            <div className='p-5 text-2xl text-white bg-red-400 text-center'>Footer</div>

            <nav class="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">

                <h1 class="text-2xl font-bold">MyLogo</h1>

                <ul class="hidden md:flex gap-6">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>

                <button class="md:hidden text-2xl">☰</button>
            </nav>
            <div className='flex justify-center p-5 flex-col'>

                <div class="border-4 border-gray-300 border-t-blue-600 rounded-full w-10 h-10 animate-spin flex justify-center"></div>

                <div class="p-6 m-3 bg-white shadow rounded 
                    transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border max-w-1/5">
                    Product Card
                </div>
            </div>


        </>
    )
}

export default Grid
