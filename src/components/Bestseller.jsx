import React, { useContext, useEffect, useState } from 'react'
import { ShopContaxt } from './shopcontaxt'
import Title from './Title'
import Productitem from './Productitem';
import { Link } from 'react-router-dom';
const Bestseller = (_id) => {
    const {products} =useContext(ShopContaxt);
    const [bestseller,setBestSeller] = useState([]);
    useEffect (()=>{
        const bestProduct = products.filter((item)=>item.bestseller);
        setBestSeller(bestProduct.slice(0,20)) //same issue need to add pagination and filter using context
    },[products])
  return (
      <div className='m-10'>
                <div className='text-center text-3xl py-8'>
    <Title text1={'Best'} text2={' Sellers'}/>
    <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base mb-10 text-gray-600'>
    "Discover our best-selling products, carefully selected by our customers and trusted for their quality, style, and value."
    </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6  max-md:m-10 max-lg:m-10 max-sm:m-10 '>
            
            {bestseller.map((item,index,)=>(
                <Link
            key={index}
            className="text-gray-700 cursor-pointer hover:shadow-2xl transition-shadow"
            to={`/products/${item._id}`}  
          >
                <Productitem  key={index} id={item._id} name={item._name} image={item._image} price={item._price}/>
        </Link>
            ))}
        </div>

    </div>
  )
}

export default Bestseller
