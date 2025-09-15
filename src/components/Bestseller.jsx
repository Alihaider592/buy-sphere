
import { bestsellerProducts } from "./Products"; 
import Pagination from "./Pagination";
import Title from "./Title";
const Bestseller = () => {
  return (
    <div>
        <div className="text-center max-sm:text-xl py-8 text-3xl">
        <Title text1={"Best"} text2={" Sellers"}/>
         <p className='w-3/4 m-auto text-sm max-sm:text-md md:text-base text-gray-600'>
          Discover our wide range of categories including clothing, watches, shoes, and more. 
          Find your perfect style today!
        </p>
        </div>
      {bestsellerProducts.length === 0 ? (
        <p>No bestseller products available.</p>
      ) : (
        <Pagination products={bestsellerProducts} productsPerPage={4} />
      )}
    </div>
  );
};

export default Bestseller;
