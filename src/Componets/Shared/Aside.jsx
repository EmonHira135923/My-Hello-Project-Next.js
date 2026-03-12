"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Aside = () => {
    const pathname = usePathname();

    // লিঙ্কগুলোর জন্য একটি অ্যারে তৈরি করলে কোড ক্লিন থাকে
    const navLinks = [
        { name: 'Home', href: '/dashboard' },
        { name: 'Profile', href: '/dashboard/profile' },
        { name: 'Settings', href: '/dashboard/settings' },
    ];

    return (
        <aside className="flex flex-col w-64 min-h-screen bg-white border-r border-gray-200">
            {/* Logo Section */}
            <Link className="flex items-center h-16 px-6 font-black text-2xl text-blue-600 border-b tracking-tight" href="/">
                MY <span className="text-gray-900 ml-1">HELLO </span>
            </Link>

            {/* Navigation Links */}
            <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto">
                {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                                isActive 
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-100" 
                                    : "text-gray-500 hover:bg-gray-50 hover:text-blue-600"
                            }`}
                        >
                            {/* আপনি চাইলে এখানে ছোট ডট বা আইকন যোগ করতে পারেন */}
                            {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white mr-2 animate-pulse" />}
                            {link.name}
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom Section (Optional) */}
            <div className="p-4 border-t border-gray-100">
                <button className="w-full flex items-center px-4 py-2 text-sm font-bold text-rose-500 hover:bg-rose-50 rounded-xl transition-colors">
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default Aside;