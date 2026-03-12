import React from 'react';
import Stories from './Storycard';

export const metadata = {
  title: "Developer Stories ",
  description: "Read the inspiring journeys of our talented developers and learn how they built their careers in the tech industry.",
  openGraph: {
    title: "Developer Stories",
    description: "Read the inspiring journeys of our talented developers and learn how they built their careers in the tech industry.",
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

const StoryCard = () => {
  return (
    <div>
      <Stories/>
    </div>
  );
};

export default StoryCard;