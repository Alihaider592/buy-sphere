import React from 'react';
import { assets } from './assets';

const Footer = () => {
  return (
    <div className='bg-gray-50 mt-20'>
      <div className='flex flex-col sm:grid sm:grid-cols-[4fr_2fr_2fr] gap-10 sm:gap-14 px-5 sm:px-16 py-10 text-sm'>
        {/* Logo & Description */}
        <div className='mb-10 sm:mb-0'>
          <img src={assets.logo} className='mb-5 w-32' alt="Logo" />
          <p className='w-full md:w-3/4 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa atque autem esse magni? Aut quibusdam ab iure doloribus asperiores ipsam?
          </p>
        </div>

        {/* Company Links */}
        <div className='mb-10 sm:mb-0'>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='hover:text-indigo-500 transition cursor-pointer'>Home</li>
            <li className='hover:text-indigo-500 transition cursor-pointer'>About US</li>
            <li className='hover:text-indigo-500 transition cursor-pointer'>Delivery</li>
            <li className='hover:text-indigo-500 transition cursor-pointer'>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className='text-xl font-medium mb-5'>Get in touch</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='font-mono text-base'>+92-302-422-7810</li>
            <li className='font-mono text-base'>contacter1024@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr className='border-gray-300' />

      {/* Copyright */}
      <p className='py-5 text-sm text-center text-gray-500'>
        © 2025 BuySphere.com — All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
