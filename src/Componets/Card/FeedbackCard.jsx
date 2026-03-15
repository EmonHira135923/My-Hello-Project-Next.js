import React from 'react';

const FeedbackCard = ({ feedback }) => {
  return (
    <div className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-50/50 transition-all duration-300 relative overflow-hidden">
      {/* Decorative Quote Icon */}
      <div className="absolute -top-2 -right-2 text-gray-50 text-6xl font-serif opacity-50 group-hover:text-blue-50 transition-colors">
        ”
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
             {/* ইউজারের নামের প্রথম অক্ষর ডাইনামিকালি দিতে পারেন */}
             F
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm">Anonymous User</h4>
            <div className="flex text-yellow-400 text-xs">★★★★☆</div>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed italic">
          {feedback.message}
        </p>

        <div className="mt-6 flex justify-between items-center border-t border-gray-50 pt-4">
           <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Feedback ID: {feedback._id.slice(-6)}</span>
           <button className="text-blue-600 text-xs font-bold hover:underline">Reply</button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;