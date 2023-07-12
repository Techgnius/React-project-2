import React, { useContext } from "react";
import { StoreContext } from "../../context/store-context";

export const Item = (props) => {
  const { id, itemName, price, itemImage } = props.data;
  const { addToCart, cartItems } = useContext(StoreContext);

  const cartItemsAmount = cartItems[id];

  return (
    <>
      <div className="item">
        <img src={itemImage} />
        <p>{itemName}</p>
        <p>${price}</p>
        <button className="addToCartBtn" onClick={() => addToCart(id)}>
          Add To Cart {cartItemsAmount > 0 && <> ({cartItemsAmount})</>}
        </button>
      </div>
    </>
  );
};
