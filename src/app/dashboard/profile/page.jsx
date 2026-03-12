import React from 'react';

const MyProfile = () => {
    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
                <p className="text-sm text-gray-500">Manage your public profile and personal information.</p>
            </div>

            {/* Profile Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                <div className="px-6 pb-6">
                    <div className="relative flex justify-between">
                        {/* Avatar */}
                        <div className="-mt-12">
                            <div className="w-24 h-24 bg-white p-1 rounded-full">
                                <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-3xl border border-gray-100">
                                    👤
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                                Edit Profile
                            </button>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-xl font-bold text-gray-900">John Doe</h2>
                        <p className="text-gray-500">Full Stack Developer</p>
                    </div>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 border-t pt-6">
                        <div>
                            <p className="text-xs text-gray-400 uppercase font-semibold">Email</p>
                            <p className="text-sm text-gray-700">john.doe@example.com</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase font-semibold">Location</p>
                            <p className="text-sm text-gray-700">New York, USA</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase font-semibold">Joined</p>
                            <p className="text-sm text-gray-700">March 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;