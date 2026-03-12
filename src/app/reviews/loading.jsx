import React from 'react';

// Skeleton Component
const ReviewSkeleton = () => {
  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-24"></div>
            <div className="h-2 bg-gray-100 rounded w-16"></div>
          </div>
        </div>
        <div className="h-4 bg-gray-200 rounded w-20"></div>
      </div>

      {/* Content Skeleton */}
      <div className="space-y-3 mb-8">
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-100 rounded w-4/5"></div>
      </div>

      {/* Footer Skeleton */}
      <div className="pt-4 border-t border-gray-50 flex justify-between">
        <div className="h-8 bg-gray-100 rounded-full w-24"></div>
        <div className="h-4 bg-gray-50 rounded w-12"></div>
      </div>
    </div>
  );
};

export default ReviewSkeleton;