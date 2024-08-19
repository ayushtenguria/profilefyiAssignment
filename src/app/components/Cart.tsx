'use client'

import React, { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import CartItem from "./CartItem";
import CouponInput from "./CouponInput";
import CartSummary from "./CartSummary";

// Mock coupon data
const coupons = [
  {
    code: "SAVE10",
    type: "percentage",
    value: 10,
  },
  {
    code: "FLAT50",
    type: "flat",
    value: 50,
  },
];

const CartPage = () => {
  const cartContext = useContext(CartContext);
  const [discount, setDiscount] = useState(0);
  const [couponError, setCouponError] = useState("");

  if (!cartContext) {
    return <p>Error: Cart context is not available.</p>;
  }

  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    cartContext;

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalWithDiscount = (total - discount).toFixed(2);

  const applyCoupon = (couponCode: string) => {
    const foundCoupon = coupons.find((coupon) => coupon.code === couponCode);
    if (foundCoupon) {
      if (foundCoupon.type === "percentage") {
        setDiscount((total * foundCoupon.value) / 100);
      } else if (foundCoupon.type === "flat") {
        setDiscount(foundCoupon.value);
      }
      setCouponError(""); 
    } else {
      setCouponError("Invalid coupon code");
      setDiscount(0); 
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeFromCart={removeFromCart}
              />
            ))}
          </ul>

          <CouponInput applyCoupon={applyCoupon} couponError={couponError} />
          <CartSummary
            totalWithDiscount={parseFloat(totalWithDiscount)}
            discount={discount}
          />
        </>
      )}
    </div>
  );
};

export default CartPage;
