import React, { createContext, useState } from "react";
import { products } from "./Products";   
export const ShopContaxt = createContext();
export const ShopContextProvider = ({children}) =>{
  const currency = '$';
  const dalivery_fee=10;
    const [search,setsearch] = useState('');
  const [showserach,setshowsearch] = useState(true);
  const value ={
      products,currency,dalivery_fee,search,setsearch,
      showserach,setshowsearch
  }
  
  return (
    <ShopContaxt.Provider value = { value }>
      {children}
    </ShopContaxt.Provider>
  );
}