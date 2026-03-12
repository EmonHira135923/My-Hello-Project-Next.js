"use client";
import ReviewCard from "@/Componets/Card/ReviewCard";
import React, { useEffect, useState } from "react";
import ReviewSkeleton from "./loading";

const ReviewPage = () => {
  const [review, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data.reviews));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Reviews Page <span className="text-blue-600">({review.length})</span>
        </h1>
        <p className="text-gray-500 mt-2">What our customers are saying about my-hello-project.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Show Skeletons while fetching data */}
        {review.length === 0 && 
          [1, 2, 3, 4, 5, 6].map((n) => <ReviewSkeleton key={n} />)
        }

        {/* Your original map logic */}
        {review.map((item) => (
          <ReviewCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
