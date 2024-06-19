"use client";

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

function GlobalState({ children }) {
  const [cartItems, setCarItems] = useState([]);

  function handleAddToCart(getCurrentItem) {
    let cpyCartItems = [...cartItems];
    const indexOfCurrentItem = cpyCartItems.findIndex(
      (item) => item.id === getCurrentItem.id
    );

    if (indexOfCurrentItem === -1) {
      cpyCartItems.push(getCurrentItem);
    }

    setCarItems(cpyCartItems);
    localStorage.setItem("cartItems", JSON.stringify(cpyCartItems));
  }

  function removeFromCart(getCurrentId) {
    console.log(getCurrentId);
    let cpyCartItems = [...cartItems];
    cpyCartItems = cpyCartItems.filter((item) => item.id !== getCurrentId);
    setCarItems(cpyCartItems);
    localStorage.setItem("cartItems", JSON.stringify(cpyCartItems));
  }

  useEffect(() => {
    setCarItems(JSON.parse(localStorage.getItem("cartItems")) || []);
  }, []);

  return (
    <CartContext.Provider
      value={{ cartItems, handleAddToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default GlobalState;
