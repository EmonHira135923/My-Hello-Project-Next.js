import React from 'react';
import Review from './ReviewPage';

export const metadata = {
  title: "Customer Reviews",
  description: "Read what our happy customers say about Taxi Kitchen's fresh food and fast delivery. See real feedback and ratings.",
  openGraph: {
    title: "Real Reviews from Real Foodies | Taxi Kitchen",
    description: "Discover why thousands of people trust Taxi Kitchen for their daily meals.",
    images: [
      {
        url: '/reviews-banner.jpg', // আপনার পাবলিক ফোল্ডারে থাকা ইমেজের পাথ
        width: 1200,
        height: 630,
        alt: 'Taxi Kitchen Customer Reviews',
      },
    ],
  },
};

const ReviewPage = () => {
  return (
    <div>
      <Review/>
    </div>
  );
};

export default ReviewPage;
