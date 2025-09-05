import { createContext } from "react";
import { products as productData } from "./Products"; 
import ShopBy from "./ShopBy";
export const ShopContaxt = createContext();

export const ShopContaxtProvider = ({ children }) => {
  const currency = '$';
  const Sybtitle ="";
  const dilivery_fee = '20';
  const products = productData;

  const value = { currency,Sybtitle, dilivery_fee, products };

  return (
    <ShopContaxt.Provider value={value}>
      {children}
    </ShopContaxt.Provider>
  );
};

// }

