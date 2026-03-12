"use client";
import { CartProviders } from "@/context/Provider";
import Image from "next/image";
import React, { use } from "react";

const CartItems = () => {
  const { cart } = use(CartProviders);

  // Safety check: jodi cart undefined thake ba array na hoy, tobe empty array dhore nibe
  const safeCart = Array.isArray(cart) ? cart : [];

  return (
    <div className="w-full">
      {safeCart.length === 0 ? (
        /* --- Empty State --- */
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-3xl shadow-inner">
            🛒
          </div>
          <p className="text-gray-500 font-medium">Your cart is empty</p>
          <p className="text-gray-400 text-xs mt-1 italic">
            Start adding some delicious food!
          </p>
        </div>
      ) : (
        /* --- Items List --- */
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Summary ({safeCart.length})
            </span>
          </div>

          <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
            {/* map use korar age safeCart use korchi */}
            {safeCart.map((item, index) => (
              <div
                key={item.id || index}
                className="flex items-center gap-3 p-3 mb-3 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    height={64}
                    width={64}
                    src={item.foodImg || "https://via.placeholder.com/64"}
                    alt={item.title || "food"}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Product Info (Optional: Price/Name add korte paren) */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-gray-800 truncate">{item.title}</p>
                  <p className="text-blue-600 text-xs font-semibold">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;