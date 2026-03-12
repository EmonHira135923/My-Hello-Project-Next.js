import React from 'react';

const Settings = () => {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
                <p className="text-sm text-gray-500">Manage your profile details and app preferences.</p>
            </div>

            {/* General Information Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 border-b pb-4 mb-6">General Information</h2>
                
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">Display Name</label>
                            <input type="text" placeholder="John Doe" className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">Email Address</label>
                            <input type="email" placeholder="john@example.com" className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">Bio</label>
                        <textarea rows="3" placeholder="Tell us about yourself..." className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"></textarea>
                    </div>
                </form>
            </div>

            {/* Notifications Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 border-b pb-4 mb-6">Preferences</h2>
                
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-gray-700">Email Notifications</p>
                            <p className="text-xs text-gray-500">Receive weekly updates about your activity.</p>
                        </div>
                        <input type="checkbox" className="w-5 h-5 accent-blue-600 cursor-pointer" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                        <div>
                            <p className="font-medium text-gray-700">Public Profile</p>
                            <p className="text-xs text-gray-500">Allow others to see your profile details.</p>
                        </div>
                        <input type="checkbox" className="w-5 h-5 accent-blue-600 cursor-pointer" />
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3">
                <button className="px-6 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition">Cancel</button>
                <button className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-md transition">Save Changes</button>
            </div>
        </div>
    );
};

export default Settings;