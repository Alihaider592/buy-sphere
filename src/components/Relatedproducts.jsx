import React, { useContext, useEffect, useState } from 'react';
import { ShopContaxt } from './shopcontaxt';
import Title from './Title';
import Productitem from './Productitem';

const Relatedproducts = ({ Category, Subcategory }) => {
  const { products } = useContext(ShopContaxt);
  const [Related, setRelated] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      console.log("🔎 All products:", products);
      console.log("➡️ Incoming props:", { Category, Subcategory });

      let productscopy = [...products];

      
      if (Category) {
        productscopy = productscopy.filter(
          (item) =>
            item.Category === Category ||
            item.category === Category
        );
      }

     
      if (Subcategory) {
        productscopy = productscopy.filter(
          (item) =>
            item.Subcategory === Subcategory ||
            item.subcategory === Subcategory
        );
      }

      console.log(productscopy);

      setRelated(productscopy.slice(0, 5));
    }
  }, [products, Category, Subcategory]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1="Related" text2="PRODUCTS" />
      </div>

      {Related.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">
          No related products found.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {Related.map((item, index) => (
            <Productitem
              key={index}
              id={item._id || item.id}
              name={item.name || item._name}
              price={item.price || item._price}
              image={item.image || item._image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Relatedproducts;
