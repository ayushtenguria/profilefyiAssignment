import React from "react";

interface CartItemProps {
  item: {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
  };
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
}

const CartItem = ({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}: CartItemProps) => {
  return (
    <li className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center">
        <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md mr-4" />
        <div>
          <span className="font-medium text-lg">{item.title}</span>
          
        </div>
      </div>
      <div className="flex items-center space-x-2">
      
      <span className="text-gray-500 ml-2 mr-4">
            {" "}
            - ${item.price}
          </span>
        <button
          onClick={() => increaseQuantity(item.id)}
          className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-700"
        >
          +
        </button>
        <div className="mx-3 px-3">
            {item.quantity}
        </div>
        <button
          onClick={() => decreaseQuantity(item.id)}
          className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-700"
        >
          -
        </button>
        <button
          onClick={() => removeFromCart(item.id)}
          className="bg-red-500 ml-10 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default CartItem;
