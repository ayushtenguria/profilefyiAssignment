"use client";
import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../context/cartContext"; // Adjust the import path as needed
import Link from "next/link";

const Navbar = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return null; // or some error handling
  }

  const { cart } = cartContext;
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <div>
      <nav className="flex justify-between px-10 py-5">
        <Link href="/">
          <div>
            <img src="/logoipsum.svg" alt="logo" />
          </div>
        </Link>
        <Link href="/cart">
          <div className="relative">
            {cartItemCount > 0 && (
              <div className="absolute top-0 right-0 h-4 w-4 bg-blue-800 text-white rounded-full flex items-center justify-center text-xs">
                {cartItemCount}
              </div>
            )}
            <ShoppingCartIcon />
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
