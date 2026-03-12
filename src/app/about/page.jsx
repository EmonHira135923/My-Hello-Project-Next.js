import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-12 py-10">
            {/* Hero Section */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                    About <span className="text-blue-600">my-hello-project</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    We are building a comprehensive platform for developers to master modern web technologies through structured learning and hands-on projects.
                </p>
            </div>

            {/* Navigation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/about/team" className="group p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all text-center">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl group-hover:scale-110 transition-transform">
                        👥
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Our Team</h2>
                    <p className="text-sm text-gray-500 mt-2">
                        Meet the experts behind the code and the curriculum.
                    </p>
                    <span className="mt-4 inline-block text-blue-600 font-medium group-hover:underline">
                        Meet the team &rarr;
                    </span>
                </Link>

                <Link href="/about/contact" className="group p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all text-center">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl group-hover:scale-110 transition-transform">
                        📩
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Contact Us</h2>
                    <p className="text-sm text-gray-500 mt-2">
                        Have questions or feedback? We'd love to hear from you.
                    </p>
                    <span className="mt-4 inline-block text-blue-600 font-medium group-hover:underline">
                        Get in touch &rarr;
                    </span>
                </Link>
            </div>

            {/* Mission Section */}
            <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-blue-100 leading-relaxed text-lg">
                        To bridge the gap between academic theory and industry reality for Computer Technology students, providing tools like ContestHub and Hero Kids to showcase real-world skills.
                    </p>
                </div>
                {/* Decorative background circle */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500 rounded-full opacity-50 blur-3xl"></div>
            </div>
        </div>
    );
};

export default AboutPage;