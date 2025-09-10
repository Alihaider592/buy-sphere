import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../components/Products";
import { assets } from "../components/assets";
import { ShopContaxt } from "../components/shopcontaxt";

const Product = () => {
  const [size,setsize]=useState(['']);
  const { id } = useParams();
console.log(id);

  const product = products.find((item) => String(item._id) === id);
  console.log("Matched product:", product);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-6 flex border-t-2 pt-10 transition-opacity ease-in-out duration-500 opacity-100">
      {/* <div className="flex gap-12 sm:gap-12 sm:flex-row">
         <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row"> 
          <div className="flex sm:flex-col overflow-x-auto overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full ">
          </div>
           </div>
      </div> */}
      <img
        src={product._image[0]}
        alt={product._name}
        className="w-auto h-[400px] object-cover mt-4"
      />
      <div className="ml-10">
      <h1 className="font-medium text-2xl mt-2">{product._name}</h1>
      <div className="flex items-center gap-1 mt-2">
        <img src={assets.star} alt="" className="w-3.5" />
        <img src={assets.star} alt="" className="w-3.5" />
        <img src={assets.star} alt="" className="w-3.5" />
        <img src={assets.star} alt="" className="w-3.5" />
        <img src={assets.dullstar} alt="" className="w-3.5" />
        <p className="pl-2">(122)</p>
      </div>
      <p className="text-xl font-medium mt-3">Price: ${product._price}</p>
      <p className="mt-5 text-gray-500 md:w-3/4">{product.description}</p>
      <div className="flex flex-col gap-4 my-8">
        <p>Select size</p>
        <div className="flex gap-2">
          {
            product.sizes.map((item,index)=>(
              <button onClick={()=>setsize(item)} className={'border py-2 px-4 bg-gray-100 '} key={index}>{item}</button>
            ))
          }
        </div>
      </div>
      </div>
    </div>
  );
};

export default Product;
