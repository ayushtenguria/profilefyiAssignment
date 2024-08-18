"use client";

import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductCard = (props: Product) => {
  const { id, title, price, image } = props;
  const cartContext = useContext(CartContext);

  const handleAddToCart = () => {
    if (cartContext) {
      console.log("Adding product with ID:", id);
      cartContext.addToCart({ id, image, title, price, quantity: 1 });
    }
  };

  return (
    <div className="flex flex-col bg-slate-100 shadow-md m-3">
      <div>
        <img src={image} className="bg-cover h-96 w-80" alt={title} />
      </div>
      <div className="p-4 space-y-2">
        <p className="text-sm">{title}</p>
        <p className="font-semibold text-sm">$ {price}</p>
        <button
          onClick={handleAddToCart}
          className="px-2 py-1 hover:text-white font-semibold border-black border-2 rounded-lg shadow-md hover:bg-gray-800 transform ease-linear duration-100"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
