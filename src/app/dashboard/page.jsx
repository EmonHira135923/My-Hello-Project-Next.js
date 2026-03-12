import React from 'react';

const Dashboard = () => {
    // Mock data for our stats
    const stats = [
        { label: 'Total Revenue', value: '$12,450', change: '+12.5%', color: 'text-green-600' },
        { label: 'Active Users', value: '1,240', change: '+3.2%', color: 'text-blue-600' },
        { label: 'New Signups', value: '48', change: '-2.1%', color: 'text-red-600' },
        { label: 'Support Tickets', value: '5', change: 'Stable', color: 'text-gray-600' },
    ];

    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
                <p className="text-sm text-gray-500">Welcome back! Here’s what’s happening today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                        <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                        <div className="flex items-baseline justify-between mt-2">
                            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                            <span className={`text-xs font-semibold ${stat.color}`}>
                                {stat.change}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Section: Recent Activity & Placeholder Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Large Section (e.g., a Chart placeholder) */}
                <div className="lg:col-span-2 p-6 bg-white rounded-xl border border-gray-200 shadow-sm h-64 flex items-center justify-center text-gray-400">
                    <div className="text-center">
                        <p>Analytics Chart Placeholder</p>
                        <span className="text-xs italic">(Connect a library like Recharts here)</span>
                    </div>
                </div>

                {/* Smaller Section (Recent Activity) */}
                <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
                    <ul className="space-y-4">
                        {[1, 2, 3].map((item) => (
                            <li key={item} className="flex gap-3 text-sm">
                                <div className="w-2 h-2 mt-1.5 rounded-full bg-blue-500 ring-4 ring-blue-50" />
                                <div>
                                    <p className="text-gray-800 font-medium">New order #123{item}</p>
                                    <p className="text-gray-500 text-xs">2 hours ago</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;