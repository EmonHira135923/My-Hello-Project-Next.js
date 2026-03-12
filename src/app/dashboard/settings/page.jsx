import React from 'react';

// Metadata for SEO and Browser tab
export const metadata = {
  title: "Settings",
  description: "Update your account preferences, manage notifications, and customize your profile settings.",
};

const Settings = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
            {/* Page Header */}
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-black text-gray-900 tracking-tight">
                    Account <span className="text-blue-600">Settings</span>
                </h1>
                <p className="text-sm text-gray-500 font-medium">
                    Manage your profile details and app preferences.
                </p>
            </div>

            {/* General Information Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 bg-gray-50/50 border-b border-gray-100">
                    <h2 className="text-lg font-bold text-gray-800">General Information</h2>
                </div>
                
                <div className="p-6">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Display Name</label>
                                <input 
                                    type="text" 
                                    placeholder="John Doe" 
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-sm" 
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                                <input 
                                    type="email" 
                                    placeholder="john@example.com" 
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-sm" 
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Bio / Description</label>
                            <textarea 
                                rows="4" 
                                placeholder="Tell us about yourself..." 
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-sm resize-none"
                            ></textarea>
                        </div>
                    </form>
                </div>
            </div>

            {/* Preferences Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 bg-gray-50/50 border-b border-gray-100">
                    <h2 className="text-lg font-bold text-gray-800">Preferences & Privacy</h2>
                </div>
                
                <div className="p-6 space-y-2">
                    {/* Email Toggle */}
                    <label className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
                        <div className="max-w-[80%]">
                            <p className="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">Email Notifications</p>
                            <p className="text-xs text-gray-500">Receive weekly updates about your activity and new food arrivals.</p>
                        </div>
                        <div className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </div>
                    </label>
                    
                    {/* Profile Privacy Toggle */}
                    <label className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
                        <div className="max-w-[80%]">
                            <p className="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">Public Profile</p>
                            <p className="text-xs text-gray-500">Allow others to see your profile details and favorite foods.</p>
                        </div>
                        <div className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </div>
                    </label>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-4">
                <p className="text-xs text-gray-400 italic font-medium">
                    * Changes will be reflected across all your devices.
                </p>
                <div className="flex gap-4">
                    <button className="px-6 py-2.5 text-sm font-bold text-gray-500 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all active:scale-95">
                        Cancel
                    </button>
                    <button className="px-8 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all active:scale-95">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;