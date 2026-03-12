"use client";
import React from "react";

const Reviewlike = ({item}) => {
  return (
    <div>
      <button className="flex items-center gap-2 group transition-colors">
        <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center group-hover:bg-pink-100 transition-colors">
          <span className="text-pink-500 text-sm">❤️</span>
        </div>
        <span  className="text-sm font-semibold text-gray-600 group-hover:text-pink-600">
          {item.likes?.length || 0} Likes
        </span>
      </button>
    </div>
  );
};

export default Reviewlike;
