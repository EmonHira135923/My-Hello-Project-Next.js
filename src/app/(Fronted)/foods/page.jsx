import FoodsCard from "@/Componets/Card/FoodsCard";
import CartItems from "@/Componets/Food/CartItems";
import FoodSearch from "@/Componets/forms/FoodSearch";
import React from "react";

// --- SEO (Dynamic Metadata) ---
export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const query = params.search || "";

  return {
    title: query 
      ? `Search results for ${query}` 
      : "Available Foods | Taxi Kitchen - Fresh Meals Delivered",
    description: query 
      ? `Looking for ${query}? Check out our fresh and delicious ${query} options at Taxi Kitchen.`
      : "Explore our wide variety of fresh meals delivered straight from our kitchen to yours. Order now!",
    openGraph: {
      images: ['/og-food-image.jpg'], // আপনার পাবলিক ফোল্ডারে একটি ইমেজ রাখতে পারেন
    },
  };
}

const fetchFoods = async (search) => {
  try {
    const res = await fetch(
      `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
      { next: { revalidate: 60 } },
    );
    const data = await res.json();
    return data.foods || [];
  } catch (err) {
    console.error("Error Fetching Foods:", err);
    return [];
  }
};

const FoodPage = async ({ searchParams }) => {
  const params = await searchParams;
  const search = params.search || "";
  const allfoods = await fetchFoods(search);

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
             Available Foods
            <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-lg ml-2 border border-blue-100">
              {allfoods.length}
            </span>
          </h1>
          <p className="text-gray-500 mt-2 text-base">
            {search 
              ? `Showing the best matches for your search.` 
              : "Fresh meals delivered from our kitchen to yours."}
          </p>
        </div>
        <FoodSearch />
      </header>

      {/* Main Content Layout */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Grid Layout (Main Section) */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {allfoods.map((food) => (
              <FoodsCard key={food.id} food={food} />
            ))}
          </div>
        </div>

        {/* Sidebar (Cart Section) */}
        <aside className="w-full lg:w-80 xl:w-96 sticky top-6">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">Cart Items</h2>
              <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded">
                0 Items
              </span>
            </div>
            <hr className="border-gray-100 mb-6" />
            <CartItems />
          </div>
        </aside>
      </div>

      {/* Empty State */}
      {allfoods.length === 0 && (
        <div className="text-center py-32 bg-white rounded-3xl border-2 border-dashed border-gray-200 mt-10">
          <p className="text-gray-400 text-lg">No foods found for "{search}".</p>
          <button className="mt-4 text-blue-600 font-semibold hover:underline">
            Try searching for something else
          </button>
        </div>
      )}
    </div>
  );
};

export default FoodPage;