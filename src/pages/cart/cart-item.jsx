import React, { useContext } from "react";
import { StoreContext } from "../../context/store-context";

export const CartItem = (props) => {
  const { id, itemName, price, itemImage } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="cartItem">
      <img src={itemImage} />
      <p>{itemName}</p>
      <p>${price}</p>
      <div className="countItem">
        <button onClick={() => removeFromCart(id)}>-</button>
        <input
          value={cartItems[id]}
          // onChange={((e) => updateCartItemCount(Number(e.target.value)), id)}
        />
        <button onClick={() => addToCart(id)}>+</button>
      </div>
    </div>
  );
};
