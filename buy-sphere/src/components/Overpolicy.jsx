import React from 'react';
import { products } from './Products';
import { assets } from './assets';
const Overpolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 px-20 sm:text-sm md:text-base  text-gray-600 '>
      <div>
        <img src={assets.chang} className='w-24 m-auto mb-5' alt="" />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-600'>We Offer haeeel free excange policy</p>
      </div>
      <div>
        <img src={assets.Return} className='w-24 m-auto mb-5' alt="" />
        <p className='font-semibold'>7 days return policy</p>
        <p className='text-gray-600'>We provide 7 days free return policy</p>
      </div>
      <div>
        <img src={assets.customer} className='w-24 m-auto mb-5' alt="" />
        <p className='font-semibold'>Best customer support</p>
        <p className='text-gray-600'>We Provide 24/7 customer support</p>
      </div>
    </div>
  );
}

export default Overpolicy;
