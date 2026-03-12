import React from 'react';

const TutorialPage = ({ params }) => {
    // params.slug will be an array: ["react", "useEffect()", "pages", "22", "cleanup-function"]
    const { slug } = params;

    // Destructuring the array based on your specific URL structure
    // /tutorials/:technology/:topic/pages/:page_no/:subject
    const [technology, topic, pagesLabel, pageNo, subject] = slug || [];

    return (
        <div className="space-y-6">
            {/* Breadcrumb style header */}
            <div className="flex items-center gap-2 text-sm text-gray-500 capitalize">
                <span>Tutorials</span>
                <span>/</span>
                <span className="text-blue-600 font-medium">{technology}</span>
                <span>/</span>
                <span>{topic}</span>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900 capitalize">
                        {subject ? subject.replace(/-/g, ' ') : 'Topic Overview'}
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Technology: <span className="font-semibold text-gray-700">{technology}</span> | 
                        Topic: <span className="font-semibold text-gray-700">{topic}</span>
                    </p>
                </div>

                <hr className="border-gray-100 mb-6" />

                <div className="prose prose-blue max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Welcome to the <span className="font-bold">{subject}</span> lesson. 
                        This is page <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md font-mono">{pageNo}</span> 
                        of the <span className="italic">{topic}</span> module in our {technology} series.
                    </p>
                    
                    {/* Placeholder for dynamic content based on the slug */}
                    <div className="mt-10 p-6 bg-gray-50 rounded-xl border-l-4 border-blue-500">
                        <h4 className="font-bold text-gray-900">What you will learn:</h4>
                        <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
                            <li>Deep dive into {subject}</li>
                            <li>Best practices for {technology} developers</li>
                            <li>Interactive examples for {topic}</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Pagination Placeholder */}
            <div className="flex justify-between items-center pt-4">
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 text-sm font-medium">
                    Previous: Page {parseInt(pageNo) - 1}
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
                    Next: Page {parseInt(pageNo) + 1}
                </button>
            </div>
        </div>
    );
};

export default TutorialPage;