// feedback/loading.js
import React from 'react';

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12 min-h-screen bg-gray-50/50">
      <div className="h-10 w-48 bg-gray-200 rounded-lg animate-pulse mb-12"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 h-48 animate-pulse">
            <div className="flex gap-3 mb-6">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div className="space-y-2">
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
                <div className="h-3 w-16 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}