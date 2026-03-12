"use client";
import { CartProviders } from "@/context/Provider";
import React, { use, useState } from "react";

const FoodOrder = ({ food }) => {
  const [likes, setLikes] = useState(false);
  const { addtoCart } = use(CartProviders);
  const handleaddtoCart = () => {
    addtoCart(food);
    setLikes(true);
  };
  return (
    <div>
      <button
        disabled={likes}
        onClick={handleaddtoCart}
        className="mt-4 w-full py-2.5 bg-gray-50 text-gray-900 font-semibold rounded-xl border border-gray-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
      >
        {likes ? "Added" : "Added to Cart"}
      </button>
    </div>
  );
};

export default FoodOrder;
