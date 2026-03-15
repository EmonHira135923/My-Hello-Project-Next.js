import FeedbackCard from "@/Componets/Card/FeedbackCard";
import React from "react";

export const metadata = {
  title: "Customer Feedback",
  description: "See what our customers are saying about our service and food quality.",
};

const feedbackData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/feedback", { cache: 'no-store' });
    const data = await res.json();
    return data.message || [];
  } catch (err) {
    console.error(err);
    return [];
  }
};

const FeedbackPage = async () => {
  const feedbacks = await feedbackData();

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12 min-h-screen bg-gray-50/50">
      {/* Header */}
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-4xl font-black text-gray-900 tracking-tight">
          Customer <span className="text-blue-600">Feedback</span>
        </h1>
        <p className="text-gray-500 mt-2 font-medium">
          We have received <span className="text-blue-600 font-bold">{feedbacks.length}</span> reviews from our community.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedbacks.map((f) => (
          <FeedbackCard key={f._id} feedback={f} />
        ))}
      </div>

      {/* Empty State */}
      {feedbacks.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
           <p className="text-gray-400">No feedback found yet.</p>
        </div>
      )}
    </div>
  );
};

export default FeedbackPage;