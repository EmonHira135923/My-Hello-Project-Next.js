import FoodOrder from '@/Componets/Button/FoodOrder';
import Image from 'next/image';
import React from 'react';

const getSingleFood = async (id) => {
    try {
        const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`);
        const data = await res.json();
        return data.details;
    } catch (err) {
        console.error("Error Fetching Single Food:", err);
    }
};

// --- SEO (Dynamic Metadata) ---
export async function generateMetadata({ params }) {
    const { id } = await params;
    const food = await getSingleFood(id);

    if (!food) {
        return {
            title: "Food Not Found | Taxi Kitchen",
        };
    }

    return {
        title: `${food.title} - ${food.category} | Taxi Kitchen`,
        description: `Enjoy the authentic taste of ${food.title} from ${food.area}. Order now for only ৳${food.price} and experience the best ${food.category} cuisine.`,
        openGraph: {
            title: `${food.title} | Taxi Kitchen`,
            description: `Order ${food.title} at ৳${food.price}. Freshly prepared ${food.area} style ${food.category}.`,
            url: `https://your-domain.com/foods/${id}`, // আপনার ডোমেইন অনুযায়ী পরিবর্তন করুন
            siteName: 'Taxi Kitchen',
            images: [
                {
                    url: food.foodImg,
                    width: 800,
                    height: 600,
                    alt: food.title,
                },
            ],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: food.title,
            description: food.description || `Best ${food.title} in town!`,
            images: [food.foodImg],
        },
    };
}

const FoodsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const food = await getSingleFood(id);

    if (!food) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <h1 className="text-2xl font-bold text-gray-400">No Food Details Found.</h1>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-10">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                
                {/* Left: Image Section */}
                <div className="relative aspect-square lg:aspect-auto h-full min-h-[400px]">
                    <Image 
                        src={food.foodImg} 
                        alt={food.title} 
                        fill 
                        className="object-cover"
                        priority
                    />
                    <div className="absolute top-6 left-6 flex gap-2">
                        <span className="bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-blue-600 shadow-sm">
                            {food.category}
                        </span>
                        <span className="bg-blue-600 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-sm">
                            {food.area}
                        </span>
                    </div>
                </div>

                {/* Right: Content Section */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                            {food.title}
                        </h1>
                        <p className="text-3xl font-bold text-blue-600">৳{food.price}</p>
                    </div>

                    <div className="mt-8 space-y-6">
                        <div className="prose prose-slate">
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Indulge in our signature <span className="font-semibold text-gray-800">{food.title}</span>. 
                                A classic <span className="italic">{food.area}</span> dish that brings 
                                the authentic flavors of <span className="text-blue-600">{food.category}</span> cuisine 
                                straight to your table.
                            </p>
                        </div>

                        {/* Video Link */}
                        {food.video && (
                            <a 
                                href={food.video} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 transition-colors"
                            >
                                <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">▶</span>
                                Watch Preparation Video
                            </a>
                        )}

                        <div className="pt-8 border-t border-gray-100">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center border rounded-2xl px-4 py-2 w-fit">
                                    <span className="text-gray-400 text-sm mr-4 uppercase font-bold tracking-widest">Qty</span>
                                    <input type="number" defaultValue={1} min={1} className="w-12 text-center font-bold outline-none" />
                                </div>
                                <FoodOrder food={food}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodsDetailsPage;