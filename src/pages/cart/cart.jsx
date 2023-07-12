import React, { useContext } from "react";
import Items from "../../items.jsx";
import { StoreContext } from "../../context/store-context";
import { CartItem } from "./cart-item.jsx";
import "./cart.css";

const Cart = () => {
  const { cartItems } = useContext(StoreContext);

  return (
    <div className="cart">
      <div>
        <h1> Cart Items </h1>
      </div>
      <div className="cart-items">
        {Items.map((item) => {
          if (cartItems[item.id] !== 0) {
            return <CartItem key={item.id} data={item} />;
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
