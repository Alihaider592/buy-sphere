import React, { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ShopContaxt } from "../components/shopcontaxt";
import Title from "../components/Title";
import { assets } from "../components/assets";
import { setCart, removeItem } from "../store/cartSlice";

const Cart = () => {
  const { products, currency, cartitems } = useContext(ShopContaxt);
  const dispatch = useDispatch();
  const cartdata = useSelector((state) => state.cart);

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
              size,
              quantity: cartitems[itemId][size],
            });
          }
        }
      }
    }
    dispatch(setCart(tempdata));
  }, [cartitems, products, dispatch]);

  return (
    <div className="p-6">
      <div className="text-3xl">
        <Title text1={"Your"} text2={" Cart"} />
      </div>
      {cartdata.length === 0 ? (
        <p>Your cart is empty </p>
      ) : (
        cartdata.map((item, index) => (
          <div
            key={index}
            className="border justify-between items-center flex p-3 mb-3"
          >
            <div className="flex">
              <img src={item.image} alt={item.name} className="w-24 " />
              <div className="ml-5">
                <h2 className="font-bold">{item.name}</h2>
                <p>Size: {item.size}</p>
                <p>Quantity: {item.quantity}</p>
                <p>
                  Price: {currency}
                  {item.price * item.quantity}
                </p>
              </div>
            </div>
            <div>
              <img
                onClick={() => dispatch(removeItem(index))}
                src={assets.Delete}
                className="w-12 h-12 cursor-pointer"
                alt=""
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
