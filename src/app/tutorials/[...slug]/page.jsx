import React from 'react';

// --- Dynamic Metadata Generation ---
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const [technology, topic, , pageNo, subject] = slug || [];

    // স্লাগ থেকে ড্যাশ বাদ দিয়ে ক্লিন টেক্সট তৈরি করা
    const cleanSubject = subject ? subject.replace(/-/g, ' ') : 'Overview';
    const cleanTopic = topic ? topic.replace(/-/g, ' ') : '';

    return {
        title: `${cleanSubject} | ${technology} Tutorial (Page ${pageNo})`,
        description: `Learn everything about ${cleanSubject} in our ${technology} tutorial. This is page ${pageNo} of the ${cleanTopic} module.`,
        keywords: [technology, topic, subject, 'tutorial', 'programming'],
        openGraph: {
            title: `${cleanSubject} - ${technology} Guide`,
            description: `Master ${cleanTopic} with our step-by-step guide.`,
            type: 'article',
        }
    };
}

const TutorialPage = async ({ params }) => {
    const { slug } = await params;

    // Destructuring based on your URL: /tutorials/:technology/:topic/pages/:page_no/:subject
    const [technology, topic, pagesLabel, pageNo, subject] = slug || [];

    return (
        <div className="max-w-5xl mx-auto space-y-6 p-4 md:p-8">
            {/* Breadcrumb style header */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 capitalize">
                <span className="hover:text-blue-600 cursor-pointer">Tutorials</span>
                <span className="text-gray-300">/</span>
                <span className="text-blue-600 font-semibold">{technology}</span>
                <span className="text-gray-300">/</span>
                <span className="truncate">{topic?.replace(/-/g, ' ')}</span>
            </nav>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-50">
                <div className="mb-8">
                    <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-4 uppercase tracking-widest">
                        Page {pageNo}
                    </div>
                    <h1 className="text-4xl font-black text-gray-900 capitalize tracking-tight">
                        {subject ? subject.replace(/-/g, ' ') : 'Topic Overview'}
                    </h1>
                    <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            <span>Tech: <strong className="text-gray-700">{technology}</strong></span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            <span>Topic: <strong className="text-gray-700">{topic?.replace(/-/g, ' ')}</strong></span>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-50 mb-8" />

                <div className="prose prose-blue max-w-none">
                    <p className="text-xl text-gray-600 leading-relaxed font-light">
                        Welcome to the <span className="font-bold text-gray-900">{subject?.replace(/-/g, ' ')}</span> lesson. 
                        This is part of our comprehensive <span className="text-blue-600 font-semibold">{technology}</span> learning path.
                    </p>
                    
                    <div className="mt-10 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 text-6-xl font-black select-none">LEARN</div>
                        <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-blue-600">🚀</span> What you will learn:
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600">
                            <li className="flex items-center gap-2">✅ Deep dive into {subject?.replace(/-/g, ' ')}</li>
                            <li className="flex items-center gap-2">✅ Industry best practices</li>
                            <li className="flex items-center gap-2">✅ Real-world {technology} examples</li>
                            <li className="flex items-center gap-2">✅ Hands-on {topic} exercises</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center pt-6 gap-4">
                <button className="flex-1 max-w-[200px] px-6 py-3 border border-gray-200 rounded-xl hover:bg-white hover:shadow-md transition-all text-sm font-bold text-gray-600 active:scale-95">
                    ← Previous Page
                </button>
                <button className="flex-1 max-w-[200px] px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all text-sm font-bold active:scale-95">
                    Next Lesson →
                </button>
            </div>
        </div>
    );
};

export default TutorialPage;