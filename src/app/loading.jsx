import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            {/* The Animated Spinner */}
            <div className="relative">
                <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                {/* Optional: Inner pulse for more flair */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600/10 rounded-full animate-pulse"></div>
            </div>

            {/* Brand/Project Text */}
            <div className="mt-6 text-center">
                <h2 className="text-xl font-bold text-gray-800 tracking-tight">
                    my-hello-project
                </h2>
                <p className="text-sm text-gray-500 mt-1 animate-pulse">
                    Setting up your workspace...
                </p>
            </div>
        </div>
    );
};

export default Loading;