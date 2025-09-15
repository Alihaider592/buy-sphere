import React, { useContext, useEffect, useState } from 'react';
import { ShopContaxt } from './shopcontaxt';
import Title from './Title';
import Productitem from './Productitem';
import { Link } from 'react-router-dom';

const Relatedproducts = ({ id,Category, Subcategory }) => {
  const { products } = useContext(ShopContaxt);
  const [Related, setRelated] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
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


      setRelated(productscopy.slice(0, 5));
    }
  }, [products, Category, Subcategory]);

  return (
    <div className="my-24">
      <Link to={`/product/${id}`}> 
      <div className="text-center text-3xl  py-2">
        <Title text1="RELATED" text2=" PRODUCTS" />
      </div>

      {Related.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">
          No related products found.
        </p>
      ) : (
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6 
                justify-items-center max-sm:justify-items-center max-md:justify-items-center 
                px-4 sm:px-6 md:px-8 lg:px-10">
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
      </Link>
    </div>
  );
};

export default Relatedproducts;
