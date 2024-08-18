"use client";
import React, { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";

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
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponError, setCouponError] = useState("");

  if (!cartContext) {
    return <p>Error: Cart context is not available.</p>;
  }

  const {
    cart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = cartContext;

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalWithDiscount = (total - discount).toFixed(2);

  const applyCoupon = () => {
    const foundCoupon = coupons.find((coupon) => coupon.code === couponCode);
    if (foundCoupon) {
      if (foundCoupon.type === "percentage") {
        setDiscount((total * foundCoupon.value) / 100);
      } else if (foundCoupon.type === "flat") {
        setDiscount(foundCoupon.value);
      }
      setCouponError(""); // Clear any previous error
    } else {
      setCouponError("Invalid coupon code");
      setDiscount(0); // Reset discount
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
              <li
                key={item.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
              >
                <div>
                  <span className="font-medium text-lg">{item.title}</span>
                  <span className="text-gray-500 ml-2">
                    {" "}
                    - ${item.price} x {item.quantity}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                  >
                    +
                  </button>
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    -
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter coupon code"
              className="border p-2 rounded w-full"
            />
            <button
              onClick={applyCoupon}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Apply Coupon
            </button>
            {couponError && <p className="text-red-500 mt-2">{couponError}</p>}
          </div>

          <h2 className="text-xl font-semibold mt-6">
            Total: ${totalWithDiscount}
          </h2>
          {discount > 0 && (
            <p className="text-green-500">You saved: ${discount.toFixed(2)}</p>
          )}
          {/* <button onClick={clearCart} className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Clear Cart</button> */}
        </>
      )}
    </div>
  );
};

export default CartPage;
