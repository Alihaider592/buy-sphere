import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../components/Products";
import { assets } from "../components/assets";
import { ShopContaxt } from "../components/shopcontaxt";
import Relatedproducts from "../components/Relatedproducts";

const Product = () => {
  const {addToCart} = useContext(ShopContaxt);
  const [size,setsize]=useState(['']);
  const { id } = useParams();
console.log(id);

  const product = products.find((item) => String(item._id) === id);
  console.log("Matched product:", product);

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <div className="p-6 flex border-t-2 pt-10 transition-opacity ease-in-out duration-500 opacity-100">
      <div>   
           <img
        src={product._image[0]}
        alt={product._name}
        className="w-auto h-[500px] object-cover mt-4"
      />
      <div className="mt-20">
          <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
          </div>
          </div>
      </div>
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
      <p className="mt-5 text-gray-500 md:w-3/4">{product.descrition}</p>
      <div className="flex flex-col gap-4 my-8">
        <p>Select size</p>
        <div className="flex gap-2">
          {
            product.sizes.map((item,index)=>(
              <button onClick={()=>setsize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500':''}`} key={index}>{item}</button>
            ))
          }
        </div>
      </div>
      <button onClick={()=>addToCart(product._id,size)} className="bg-blue-600 px-8 py-3 text-white  text-sm active:bg-gray-700">ADD TO CART</button>
      <hr className="mt-8 sm:w-4/5"/>
      <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
        <p>100% Original Product.</p>
        <p>Cash on delivery is available on this product.</p>
        <p>Easy return and exchange policy within 7 days.</p>
      </div>
      </div>
      </div>
      <div className="flex flex-col gap-4 border px-6 py-6 m-5 text-sm text-gray-500">
          <p>An e-commerce website is an online store that allows businesses to sell products or services to customers directly over the internet, facilitating transactions, payment processing, and order fulfillment without a physical location.</p>
      </div>
     <Relatedproducts Category={product.category} Subcategory={product.subcategory}/>
    </div>
  );
};

export default Product;
