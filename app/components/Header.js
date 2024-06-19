"use client";

import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <header>
      <Link href="/" className="header-link-main">
        Store
      </Link>
      <ul className="header-links">
        <li>
          <Link href="/" className="header-link">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="header-link">
            About
          </Link>
        </li>
        <li>
          <span
            className={
              cartItems && cartItems.length > 0 ? "cart-items-amount" : "hidden"
            }
          >
            {cartItems && cartItems.length > 0 ? cartItems.length : null}
          </span>
          <Link href="/cart" className="header-link">
            Cart
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
