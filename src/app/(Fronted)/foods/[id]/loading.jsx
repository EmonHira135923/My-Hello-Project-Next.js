import React from 'react';

const DetailsSkeleton = () => {
    return (
        <div className="max-w-6xl mx-auto p-4 md:p-10 animate-pulse">
            <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-2 h-[600px]">
                
                {/* Left: Image Placeholder */}
                <div className="bg-gray-200 h-full w-full"></div>

                {/* Right: Content Placeholder */}
                <div className="p-8 md:p-12 space-y-10 flex flex-col justify-center">
                    <div className="space-y-4">
                        <div className="h-10 bg-gray-200 rounded-lg w-3/4"></div>
                        <div className="h-8 bg-gray-200 rounded-lg w-1/4"></div>
                    </div>
                    
                    <div className="space-y-3">
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    </div>

                    <div className="pt-8 border-t border-gray-100">
                        <div className="flex gap-4">
                            <div className="h-14 bg-gray-200 rounded-2xl w-32"></div>
                            <div className="h-14 bg-gray-200 rounded-2xl flex-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsSkeleton;