"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import React from "react";

const FoodSearch = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleFoodSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.search.value;

    // ১. বর্তমান URL-এর প্যারামিটারগুলো নেওয়া
    const params = new URLSearchParams(searchParams);

    // ২. যদি ভ্যালু থাকে তবে 'search' সেট করা, না থাকলে ডিলিট করা
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    // ৩. নতুন URL-এ পুশ করা (এটি সার্ভার কম্পোনেন্টকে রি-ফেচ করতে বাধ্য করবে)
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-md">
      <form 
        onSubmit={handleFoodSearch} 
        className="relative flex items-center group"
      >
        <div className="absolute left-4 text-gray-400 group-focus-within:text-blue-500 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <input
          type="text"
          name="search"
          // URL-এ থাকা বর্তমান সার্চ ভ্যালু ইনপুটে ধরে রাখার জন্য
          defaultValue={searchParams.get("search")?.toString()} 
          placeholder="Search your favorite food..."
          className="w-full pl-12 pr-28 py-3.5 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 shadow-sm transition-all text-sm text-gray-700"
        />

        <button 
          type="submit"
          className="absolute right-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-all shadow-md"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default FoodSearch;