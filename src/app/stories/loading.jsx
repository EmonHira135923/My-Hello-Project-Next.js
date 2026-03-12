import React from 'react';

export default function Loading() {
  const skeletonCards = Array.from({ length: 12 });

  return (
    <div className="min-h-screen bg-slate-950 px-8 py-12 max-w-9xl mx-auto">
      {/* Header Skeleton */}
      <div className="mb-12 animate-pulse">
        <div className="h-10 bg-slate-800 rounded-lg w-64 mb-4" />
        <div className="h-4 bg-slate-800 rounded-md w-40" />
      </div>

      {/* Grid of 12 Skeleton Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skeletonCards.map((_, index) => (
          <div 
            key={index} 
            className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col h-full animate-pulse"
          >
            {/* Profile Header Skeleton */}
            <div className="flex items-center gap-4 mb-5">
              <div className="h-14 w-14 rounded-full bg-slate-800 flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-slate-800 rounded-md w-3/4" />
                <div className="h-3 bg-slate-800 rounded-md w-1/2" />
                <div className="h-3 bg-slate-800/50 rounded-md w-1/3" />
              </div>
            </div>

            {/* Content Lines Skeleton */}
            <div className="space-y-3 flex-grow mt-2">
              <div className="h-3 bg-slate-800 rounded-md w-full" />
              <div className="h-3 bg-slate-800 rounded-md w-full" />
              <div className="h-3 bg-slate-800 rounded-md w-4/5" />
            </div>

            {/* Button Skeleton */}
            <div className="mt-6 h-10 bg-slate-800 rounded-xl w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}