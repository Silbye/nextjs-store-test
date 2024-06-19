"use client";

import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Post = ({ post }) => {
  const { handleAddToCart, cartItems } = useContext(CartContext);

  return (
    <div className="post">
      <h2>{post.author}</h2>
      <img src={post.download_url} />
      <Link href="/">Go back</Link>
      <button
        className="add-to-cart-btn"
        disabled={cartItems.findIndex((item) => item.id === post.id) !== -1}
        onClick={() => handleAddToCart(post)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Post;
