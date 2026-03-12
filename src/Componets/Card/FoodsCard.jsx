import Image from "next/image";
import React from "react";
import FoodOrder from "../Button/FoodOrder";
import Link from "next/link";

const FoodsCard = ({ food }) => {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Image Section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <Image
          src={food.foodImg}
          alt={food.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm text-sm font-bold text-blue-600 z-10">
          ৳{food.price}
        </div>
        <div className="absolute bottom-3 left-3 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md z-10">
          {food.category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-1">
        <h2 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {food.title}
        </h2>
        <p className="text-sm text-gray-500 mt-2 flex-1 line-clamp-2">
          Delicious {food.category} based meal, perfectly prepared for a
          balanced dining experience.
        </p>

        {/* Action Buttons Section */}
        <div className="mt-5 flex flex-col gap-2">
          {/* View Details Button */}
          <Link 
            href={`/foods/${food.id}`} 
            className="mt-4 w-full text-center py-2.5 bg-gray-50 text-gray-900 font-semibold rounded-xl border border-gray-200 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all"
          >
            View Details
          </Link>
          
          {/* Order Now Button (FoodOrder component handles its own styling) */}
          <FoodOrder food={food} />
        </div>
      </div>
    </div>
  );
};

export default FoodsCard;