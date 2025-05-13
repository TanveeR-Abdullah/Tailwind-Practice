// import { useState } from 'react'
import images from './assets/haniya.png'
// import  from '/vite.svg'
import './App.css'

function App() {


  return (
    <body className='h-screen flex items-center justify-center bg-gray-400' >

      <div className='max-w-sm mx-auto p-10 bg-white rounded-xl space-y-2
          sm:flex sm:items-center sm:py-4 sm:space-y-0 sm:space-x-6'>
        <img className=' sm:mx-0 sm:flex-shrink-0 
             h-24 mx-auto rounded-full ring-4 transform hover:scale-150 duration-300
             ring-pink-200' src={images} alt="haniya" />

        <div className='text-center space-y-2 '>
          <div className='space-y-1' >
            <p className='text-lg text-black font-bold' >hehe haniya amir </p>
            <p className='text-sm text-gray-400 font-bold' >learning tailwind </p>
          </div>
          <button className='px-3 py-1 rounded-full bg-pink-200
           text-white font-semibold hover:text-pink-300 hover:bg-white 
           focus:outline-none focus:ring-2 focus:ring-pink-300  ' >Visit now</button>
        </div>
      </div>

    </body>
  )
}

export default App
