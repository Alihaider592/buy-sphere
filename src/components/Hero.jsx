
import { assets } from './assets'

const Hero = () => {
  return (
    <div className="flex flex-col h-auto md:flex-row items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 px-6 md:px-12 py-10 md:py-16 lg:py-20 xl:py-24 max-h-screen gap-y-8 md:gap-y-0 md:gap-x-8 lg:gap-x-16 xl:gap-x-24 2xl:gap-x-32">
      

      {/* Hero Left */}
      <div className="w-full md:w-1/2 text-white text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
          Latest Tech at Unbeatable Prices
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-lg mx-auto md:mx-0">
          Discover cutting-edge electronics, gadgets, and accessories with free shipping and 30-day returns.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
          <button className="w-full sm:w-auto py-3 px-6 rounded-xl text-indigo-500  font-bold bg-white hover:bg-gray-200 transition">
            Shop Now
          </button>
          <button className="w-full  max-sm:w-auto py-3  px-6 rounded-xl border-2 border-white text-white hover:bg-gray-100 hover:text-indigo-500 font-bold transition">
            View Deals
          </button>
        </div>
      </div>

      {/* Hero Right  */}
      <div className="hidden md:flex w-full md:w-1/2 justify-center">
        <img
          src={assets.T3}
          alt="Tech product"
          className="
            w-64  sm:w-72 md:w-80 lg:w-[400px] xl:w-[300px] 2xl:w-[350px]
            object-contain
          "
        />
    
      </div>
    </div>
  )
}

export default Hero
