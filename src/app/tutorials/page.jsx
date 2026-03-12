import React from 'react';

const TutorialsPage = () => {
    const tutorials = [
        { id: 1, title: 'Getting Started with Next.js', duration: '12:45', category: 'Basics', level: 'Beginner' },
        { id: 2, title: 'Advanced Tailwind CSS Layouts', duration: '24:10', category: 'Design', level: 'Intermediate' },
        { id: 3, title: 'Mastering React Server Components', duration: '18:30', category: 'Advanced', level: 'Expert' },
        { id: 4, title: 'Database Integration with MongoDB', duration: '32:15', category: 'Backend', level: 'Intermediate' },
    ];

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Learning Center</h1>
                    <p className="text-sm text-gray-500">Master your skills with our step-by-step tutorials.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 text-sm font-medium bg-white border rounded-lg hover:bg-gray-50">Filter</button>
                    <button className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700">All Topics</button>
                </div>
            </div>

            {/* Tutorials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tutorials.map((video) => (
                    <div key={video.id} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer">
                        {/* Video Thumbnail Placeholder */}
                        <div className="aspect-video bg-gray-100 relative flex items-center justify-center">
                            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform shadow-sm">
                                <span className="ml-1">▶</span>
                            </div>
                            <span className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-[10px] rounded">
                                {video.duration}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase rounded-full">
                                    {video.category}
                                </span>
                                <span className="text-[10px] text-gray-400 font-medium italic">
                                    • {video.level}
                                </span>
                            </div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {video.title}
                            </h3>
                            <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                                Learn the core concepts of {video.title} in this comprehensive walkthrough for my-hello-project.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TutorialsPage;