"use client";
import { CartProviders } from "@/context/Provider";
import React, { use, useState } from "react";

const FoodOrder = ({ food }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addtoCart } = use(CartProviders);

  const handleAddToCart = () => {
    setLoading(true);
    
    // একটি ছোট ডিলে দিচ্ছি যাতে ইউজার রিয়েলিস্টিক ফিল পায়
    setTimeout(() => {
      addtoCart(food);
      setIsAdded(true);
      setLoading(false);
      
      // ৩ সেকেন্ড পর বাটন আবার আগের অবস্থায় ফিরে আসবে (অপশনাল)
      setTimeout(() => setIsAdded(false), 3000);
    }, 600);
  };

  return (
    <div className="w-full">
      <button
        disabled={isAdded || loading}
        onClick={handleAddToCart}
        className={`
          relative w-full py-3.5 px-6 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden
          ${isAdded 
            ? "bg-emerald-500 text-white shadow-lg shadow-emerald-100 cursor-default" 
            : "bg-blue-600 text-white hover:bg-blue-700 active:scale-95 shadow-lg shadow-blue-100"}
          ${loading ? "opacity-90 cursor-wait" : ""}
        `}
      >
        {/* Loading Spinner */}
        {loading && (
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}

        {/* Icons & Text */}
        {!loading && (
          <>
            {isAdded ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span>Added to Basket</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span>Add to Cart</span>
              </>
            )}
          </>
        )}

        {/* Button Glass Effect on Hover */}
        {!isAdded && !loading && (
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:animate-[shimmer_1.5s_infinite]" />
        )}
      </button>
    </div>
  );
};

export default FoodOrder;