import React, { useContext } from "react";
import { ShopContaxt } from "./shopcontaxt";
import { Link } from "react-router-dom";

const Shopbyproducts = ({ id, Subtitle, title, image, name }) => {
  const { currency } = useContext(ShopContaxt);
  return (
    <Link
      className="text-gray-700 cursor-pointer hover:shadow-2xl transition-shadow"
      to={`/product?id=${id}`}  
    >
      <div className="overflow-hidden">
        <p className="pt-3 pb-1 max-sm:text-sm text-lg text-center">{title}</p>
        <img className="h-60 ml-2" src={image[0]} alt={name} />
      </div>
      <p className="pt-3 pb-1 max-sm:text-sm text-lg font-bold text-center">{name}</p>
      <p className="text-lg text-center max-sm:text-sm font-medium text-gray-600">{Subtitle}</p>
    </Link>
  );
};

export default Shopbyproducts;
