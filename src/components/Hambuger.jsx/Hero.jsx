import React from "react";
import { assets } from "../assets";

const Hero = () => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-between 
      bg-gradient-to-r from-indigo-500 to-purple-500 
      px-3 sm:px-4 md:px-8 lg:px-12 
      py-4 sm:py-6 md:py-8 lg:py-20 
      min-h-[25vh] sm:min-h-[30vh] md:min-h-[35vh] lg:min-h-[70vh]"
    >
      {/* Left */}
      <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
        <h1
          className="text-base sm:text-lg md:text-2xl 
          lg:text-5xl xl:text-6xl font-bold leading-snug lg:leading-tight"
        >
          Latest Tech at Unbeatable Prices
        </h1>
        <p
          className="mt-2 text-[11px] sm:text-xs md:text-sm lg:text-lg 
          font-medium max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto lg:mx-0"
        >
          Discover cutting-edge electronics, gadgets, and accessories with free shipping and 30-day returns.
        </p>

        {/* Buttons */}
        {/* <div className="mt-3 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2"> */}
          <button className="w-full sm:w-auto mt-5 py-2.5 px-4 rounded-lg text-indigo-500 font-bold bg-white hover:bg-gray-200 transition text-xs sm:text-sm lg:text-base">
            Shop Now
          </button>
          <button className="w-full sm:w-auto py-3.5 px-5 ml-8 rounded-lg border-[3px] border border-white text-white hover:bg-gray-100 hover:text-indigo-500 font-bold transition text-xs sm:text-sm lg:text-base">
            View Deals
          </button>
        {/* </div> */}
      </div>

      {/* Right (only lg and above) */}
      <div className="hidden lg:flex w-full lg:w-1/2 justify-center mt-4 lg:mt-0">
        <img
          src={assets.T3}
          alt="Tech product"
          className="w-32 md:w-44 lg:w-[280px] xl:w-[350px] 2xl:w-[400px] object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
