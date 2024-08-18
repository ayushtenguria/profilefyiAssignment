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
    <div className="flex flex-col shadow-md m-3 w-80 h-96 overflow-hidden">
      <div className="w-full h-2/3">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 h-1/3 flex flex-col justify-between">
        <p className="text-sm font-medium">{title}</p>
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
