import Link from 'next/link';
import React from 'react';

const Aside = () => {
    return (
        <aside className="flex flex-col flex-1 min-h-0 bg-white border-r border-gray-200">
            <Link className="flex items-center h-16 px-4 font-bold text-xl text-blue-600 border-b" href="/">
                Dashboard
            </Link>
            <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
                <Link href="/dashboard" className="block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100">Home</Link>
                <Link href="/dashboard/profile" className="block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100">Profile</Link>
                <Link href="/dashboard/settings" className="block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100">Settings</Link>
            </nav>
        </aside>
    );
};

export default Aside;