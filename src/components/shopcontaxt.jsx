import React, { createContext, useEffect, useState } from "react";
import { products } from "./Products";   
import { toast } from "react-toastify";
export const ShopContaxt = createContext();
export const ShopContextProvider = ({children}) =>{
  const currency = '$';
  const dalivery_fee=10;
    const [search,setsearch] = useState('');
    const [showserach,setshowsearch] = useState(true);
    const [cartitems ,setcartitems] = useState();
   const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size")
      return;
    }
  let cartdata = structuredClone(cartitems || {}); 

  if (cartdata[itemId]) {
    
    if (cartdata[itemId][size]) {
      cartdata[itemId][size] += 1;
    } else {
      cartdata[itemId][size] = 1;
    }
  } else {
    cartdata[itemId] = {};
    cartdata[itemId][size] = 1;
  }

  setcartitems(cartdata);
};

const getcartcount =()=>{
  let totalcount = 0;
  for (const items in cartitems){
    for(const item in cartitems [items])
      try {
        if (cartitems [items][item] > 0) {
           totalcount += cartitems[items][item];
        }
      } catch (error) {
        
      }
  }
  return totalcount
}

  const value ={
      products,currency,dalivery_fee,search,setsearch,
      showserach,setshowsearch,cartitems,addToCart,getcartcount
  }
  
  return (
    <ShopContaxt.Provider value = { value }>
      {children}
    </ShopContaxt.Provider>
  );
}