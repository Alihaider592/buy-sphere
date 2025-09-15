
import Title from "./Title";
import Shopbyproducts from "./shopbyproducts";
import { shopProducts } from "./Products"; 

const ShopBy = () => {
  return (
    <div className="my-10 flex-col">
      <div className="text-center max-sm:text-xl py-8 text-3xl">
        <Title text1={"Shop By"} text2={" Category"} />
        <p className="w-3/4 m-auto text-sm max-sm:text-md md:text-base text-gray-600">
          Discover our wide range of categories including clothing, watches, shoes,
          and more. Find your perfect style today!
        </p>
      </div>
      <div className="grid p-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4  gap-y-6">
        {shopProducts.length > 0 ? (
          shopProducts.map((item) => (
            <Shopbyproducts
              key={item._id}
              id={item._id}
              title={item._title}
              image={item._image}
              name={item._name}
              Subtitle={item._Subtitle}
              price={item._price}
            />
          ))
        ) : (
          <p className="text-center col-span-full">No products available</p>
        )}
      </div>
    </div>
  );
};

export default ShopBy;
