'use client'

import React, { useState } from "react";

interface CouponInputProps {
  applyCoupon: (couponCode: string) => void;
  couponError: string;
}

const CouponInput = ({ applyCoupon, couponError }: CouponInputProps) => {
  const [couponCode, setCouponCode] = useState("");

  const handleApplyCoupon = () => {
    applyCoupon(couponCode);
  };

  return (
    <div className="mt-6">
      <input
        type="text"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        placeholder="Enter coupon code"
        className="border p-2 rounded w-full"
      />
      <button
        onClick={handleApplyCoupon}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Apply Coupon
      </button>
      {couponError && <p className="text-red-500 mt-2">{couponError}</p>}
    </div>
  );
};

export default CouponInput;
