import React from 'react';

export const metadata = {
  title: "My Profile",
  description: "Manage your personal information, address, and order history.",
};

const MyProfile = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">My <span className="text-blue-600">Profile</span></h1>
          <p className="text-gray-500 text-sm mt-1">Update your photo and personal details here.</p>
        </div>
        <div className="hidden md:block">
           <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Last Login: 2 hours ago</span>
        </div>
      </div>

      {/* Main Profile Card */}
      <div className="bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 overflow-hidden">
        
        {/* Banner with Pattern */}
        <div className="h-40 bg-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          <div className="absolute -bottom-1 text-white/10 text-9xl font-black right-4 select-none">TAXI</div>
        </div>

        <div className="px-8 pb-8">
          <div className="relative flex flex-col md:flex-row justify-between items-end md:items-center">
            {/* Avatar & Info */}
            <div className="flex flex-col md:flex-row items-center md:items-end gap-5 -mt-16">
              <div className="w-32 h-32 bg-white p-1.5 rounded-full shadow-lg relative group">
                <div className="w-full h-full bg-blue-50 rounded-full flex items-center justify-center text-5xl border-2 border-dashed border-blue-200 overflow-hidden">
                   {/* Fallback emoji or Image */}
                   <span className="group-hover:scale-110 transition-transform cursor-default">👨‍💻</span>
                </div>
                <button className="absolute bottom-1 right-1 bg-blue-600 text-white p-2 rounded-full border-4 border-white hover:bg-blue-700 shadow-sm transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>
              
              <div className="text-center md:text-left mb-2">
                <h2 className="text-2xl font-bold text-gray-900">John Doe</h2>
                <p className="text-blue-600 font-medium text-sm">Premium Member Since 2024</p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex gap-3 w-full md:w-auto">
              <button className="flex-1 px-6 py-2.5 bg-gray-50 text-gray-700 rounded-xl text-sm font-bold border border-gray-200 hover:bg-gray-100 transition-all active:scale-95">
                Share Profile
              </button>
              <button className="flex-1 px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95">
                Edit Details
              </button>
            </div>
          </div>

          {/* Bio Section */}
          <div className="mt-10 max-w-2xl">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">About Me</h3>
            <p className="text-gray-600 leading-relaxed italic">
              "Food enthusiast and software developer. Love exploring new cuisines and building seamless digital experiences. Based in NYC."
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-tight">Email Address</p>
              <p className="text-sm text-gray-800 font-medium truncate">john.doe@example.com</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-tight">Phone Number</p>
              <p className="text-sm text-gray-800 font-medium">+1 (555) 000-1234</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-tight">Primary Location</p>
              <p className="text-sm text-gray-800 font-medium">New York, USA</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-tight">Total Orders</p>
              <p className="text-sm text-gray-800 font-medium">152 Meals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Completeness Placeholder */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center justify-between gap-6">
        <div className="flex-1">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-bold text-gray-700">Profile Completeness</span>
            <span className="text-sm font-bold text-blue-600">85%</span>
          </div>
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
            <div className="bg-blue-600 h-full w-[85%] rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]"></div>
          </div>
        </div>
        <p className="text-xs text-gray-400 max-w-35">Add your birth date to reach 100%!</p>
      </div>
    </div>
  );
};

export default MyProfile;