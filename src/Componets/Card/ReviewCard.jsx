import Image from "next/image";
import React from "react";
import Reviewlike from "../Button/Reviewlike";

const ReviewCard = ({ item }) => {
  // Format the date to something readable like "Jan 12, 2025"
  const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      {/* User Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-blue-50 ring-2 ring-white">
            <Image
              src={item.photo}
              alt={item.user}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 leading-none">{item.user}</h4>
            <p className="text-[11px] text-gray-400 mt-1 uppercase tracking-wider font-medium">
              {formattedDate}
            </p>
          </div>
        </div>
        
        {/* Star Rating */}
        <div className="flex gap-0.5 text-yellow-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-lg">
              {i < item.rating ? "★" : "☆"}
            </span>
          ))}
        </div>
      </div>

      {/* Review Content */}
      <div className="flex-1">
        <p className="text-gray-700 leading-relaxed text-sm md:text-base whitespace-pre-line">
          {item.review}
        </p>
      </div>

      {/* Footer: Likes & Interactions */}
      <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between">
        <Reviewlike item={item}/>
        
        <span className="text-[10px] bg-gray-50 px-2 py-1 rounded text-gray-400 font-mono">
            ID: #{item.id}
        </span>
      </div>
    </div>
  );
};

export default ReviewCard;