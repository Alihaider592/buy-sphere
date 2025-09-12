import React, { useContext, useEffect, useState } from "react";
import { ShopContaxt } from "../components/shopcontaxt";
import Title from "../components/Title";

const Cart = () => {
  const { products, currency, cartitems } = useContext(ShopContaxt);
  const [cartdata, setcartdata] = useState( 
()=> JSON.parse(localStorage.getItem("cart"))||[]
  );

  useEffect(() => {
    const tempdata = [];

    
    for (const itemId in cartitems) {
      for (const size in cartitems[itemId]) {
        if (cartitems[itemId][size] > 0) {
          const productDetails = products.find(
            (p) => String(p._id) === String(itemId)
          );

          if (productDetails) {
            tempdata.push({
              name: productDetails._name,
              price: productDetails._price,
              image: productDetails._image[0],
              size: size,
              quantity: cartitems[itemId][size],
            });
          }
        }
      }
    }
console.log(tempdata);
    setcartdata(tempdata);
    localStorage.setItem("cart",JSON.stringify(tempdata));
  }, [cartitems, products]);

  return (
    <div className="p-6">
      <div className="text-3xl">
      <Title text1={"Your"} text2={" Cart"} />
</div>
      {cartdata.length === 0 ? (
        <p>Your cart is empty </p>
      ) : (
        cartdata.map((item, index) => (
          <div key={index} className="border flex p-3 mb-3">
            <img src={item.image} alt={item.name} className="w-24 " />
            <div className="flex">
            <div className="ml-5">
            <h2 className="font-bold">{item.name}</h2>
            <p>Size: {item.size}</p>
            <p>Quantity: {item.quantity}</p>
            <p>
              Price: {currency}
              {item.price * item.quantity}
            </p>
          </div>
          <div className="flex relative right-4">
          {/* <img className="w-10 h-10" src='delete.jpeg'/> */}
          </div>
          </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
