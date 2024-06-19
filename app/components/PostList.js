"use client";

import Link from "next/link";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function PostList({ posts }) {
  const { handleAddToCart, cartItems } = useContext(CartContext);

  return (
    <div className="posts">
      {posts.map((el) => (
        <div key={el.id} className="post">
          <h2>{el.author}</h2>
          <img src={el.download_url} />
          <Link href={`/post/` + el.id}>Details</Link>
          <button
            className="add-to-cart-btn"
            disabled={cartItems.findIndex((item) => item.id === el.id) !== -1}
            onClick={() => handleAddToCart(el)}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}
