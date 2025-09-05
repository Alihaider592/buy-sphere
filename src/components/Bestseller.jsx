import React, { useContext, useEffect, useState } from 'react'
import { product } from './Products';
import { ShopContaxt } from './shopcontaxt'
import Title from './Title'
import Productitem from './Productitem';
const Bestseller = () => {
    const {products} =useContext(ShopContaxt);
    const [bestseller,setBestSeller] = useState([]);
    useEffect (()=>{
        const bestProduct = product.filter((item)=>item.bestseller);
        setBestSeller(bestProduct.slice(0,5))
    },[products])
  return (
    <div className='m-10'>
        <div className='text-center text-3xl py-8'>
    <Title text1={'Best'} text2={' Sellers'}/>
    <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
    "Discover our best-selling products, carefully selected by our customers and trusted for their quality, style, and value."
    </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ml-[20%] max-md:m-10 max-lg:m-10 max-sm:m-10 '>
            
            {bestseller.map((item,index)=>(
                <Productitem key={index} id={item._id} name={item._name} image={item._image} price={item._price}/>
            ))}
        </div>
    </div>
  )
}

export default Bestseller
