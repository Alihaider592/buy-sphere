import React from 'react';
import { assets } from './assets';

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[4fr_2fr_2fr] gap-14 mt-40 text-sm '>
        <div className='ml-20 relative bottom-12'>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full    md:w-3/4 text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa atque autem esse magni? Aut quibusdam ab iure doloribus asperiores ipsam?</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'> COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About US</li>
                <li>Delivery</li>
                <li>Privecy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5 '>Get in touch</p>
            <ul className='text-xl font-medium mb-5  font-mono text-gray-600'>
                <li>+92-302-422-7810</li>
                <li className='mt-5'>contacter1024@gmail.com</li>
            </ul>
        </div>
      </div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@ BuySphere.com-Al Right reserved.</p>
    </div>
  );
}

export default Footer;
