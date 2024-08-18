"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

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

const ProductList = () => {
  const [product, setProduct] = useState<Product[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("network error");
        }
        const result = await response.json();
        setProduct(result);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  if (!product) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
      {product.map((item) => (
        <div key={item.id}>
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            description={item.description}
            category={item.category}
            rating={item.rating}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
