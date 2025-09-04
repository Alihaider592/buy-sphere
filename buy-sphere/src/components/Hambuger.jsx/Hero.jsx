import React from 'react'

const Hero = () => {
  return (
    <div className='flex bg-gradient-to-r from-indigo-500 to-purple-500  sm:flex-row'>
      {/* hero left */}
          <div className='w-[50%] text-white h-[500px] border-black'>
            <div className='text-6xl m-10 mt-20 font-bold'>Latest Tech at Unbeatable Prices</div>
            <p className='text-lg m-10 font-bold'>Discover cutting-edge electronics, gadgets, and accessories with free shipping and 30-day returns.</p>
            <button className='py-4 px-8 rounded-xl ml-10 text-indigo-500 font-bold hover:bg-gray-200 bg-white'>Shop Now</button>
            <button className='py-5 px-9 ml-10 rounded-xl border-[4px] hover:bg-gray-100 hover:text-indigo-500 font-bold border-white'>View Deals</button>
          </div>
          <div className='w-[50%] h-[500px] border-black'></div>
          </div>
  )
}

export default Hero
