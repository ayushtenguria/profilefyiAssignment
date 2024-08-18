'use client'


import Image from "next/image";
import ProductList from "./components/ProductList";
import { CartProvider } from "./context/cartContext";

export default function Home() {
  return (
   
      <div>
        <ProductList />
      </div>
    
  );
}
