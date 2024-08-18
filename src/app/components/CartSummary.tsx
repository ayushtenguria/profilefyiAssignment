import React from "react";

interface CartSummaryProps {
  totalWithDiscount: number;
  discount: number;
}

const CartSummary = ({ totalWithDiscount, discount }: CartSummaryProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mt-6">
        Total: ${totalWithDiscount}
      </h2>
      {discount > 0 && (
        <p className="text-green-500">You saved: ${discount.toFixed(2)}</p>
      )}
    </div>
  );
};

export default CartSummary;
