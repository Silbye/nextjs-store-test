"use client";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="cart">
      {cartItems && cartItems.length > 0
        ? cartItems.map((item) => (
            <div className="post">
              <h2>{item.author}</h2>
              <img src={item.download_url} />
              <button
                className="add-to-cart-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove from cart
              </button>
            </div>
          ))
        : null}
    </div>
  );
}
