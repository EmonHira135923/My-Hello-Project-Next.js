import React from 'react';

const Anavvar = () => {
    return (
        <div className="flex items-center justify-between h-16 px-8 bg-white border-b border-gray-200">
            <div className="text-sm text-gray-500">Welcome back, User!</div>
            <div className="flex items-center gap-4">
                <button className="p-1 text-gray-400 hover:text-gray-600">🔔</button>
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    U
                </div>
            </div>
        </div>
    );
};

export default Anavvar;