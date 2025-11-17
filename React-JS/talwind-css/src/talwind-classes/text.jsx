import React from 'react'

const Text = () => {
    return (
        <div className='w-90 m-auto p-5'>

            <h1 className='text-3xl font-extralight'>* Text colors</h1>

            <div className='p-5'>
                <p class="text-red-500">Red Text</p>
                <p class="text-blue-600">Blue Text</p>
                <p class="text-green-400">Green Text</p>
            </div>
            <hr />
            <p class="text-3xl font-extralight">* text-sizing</p>

            <div className='p-5'>
                <p class="text-sm">Small text</p>
                <p class="text-lg">Large text</p>
                <p class="text-2xl">Extra large</p>
            </div>

            <hr />
            <p class="text-3xl font-extralight">* Font-whight</p>
            <div className='p-5'>
                <p class="font-light">Light Text</p>
                <p class="font-normal">Normal Text</p>
                <p class="font-semibold">Semi-bold</p>
                <p class="font-bold">Bold Text</p>
            </div>
            <hr />
            <p className='font-extralight text-3xl'>* Background Colors</p>
            <div className='p-5'>
                <div class="bg-blue-500 text-white p-4">Blue Box</div>
                <div class="bg-gray-200 p-4">Gray Box</div>
                <div class="bg-green-400 p-4">Green Box</div>
            </div>
            <hr />
            <div className='my-5'>
                <p className='font-extralight text-3xl'>* Gradient Box</p>
                <div class="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4">
                    Gradient Box
                </div>
            </div>

            <hr />
            <p className='font-light text-2xl my-5'> *Space-between children (space-x / space-y)</p>
            <div class="flex space-x-4 my-5">
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <hr />
            <div class="space-y-3 my-5">
                <div class="bg-gray-200 p-2">Item 1</div>
                <div class="bg-gray-200 p-2">Item 2</div>
            </div>
            <hr />
            <div class="p-6 m-4 bg-blue-100 rounded-xl">
                <h2 class="text-2xl font-bold">Spacing Test</h2>
                <p class="mt-2 text-gray-700">Practicing margin and padding in Tailwind.</p>
            </div>
        </div>
    )
}

export default Text
