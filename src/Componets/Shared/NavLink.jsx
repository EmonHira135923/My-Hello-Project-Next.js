"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const pathName = usePathname();
    
    // Check if the link is active
    // 1. Exact match for Home ('/') 
    // 2. Starts with match for other routes (to keep 'About' active on 'About/Team')
    const isActive = href === "/" 
        ? pathName === "/" 
        : pathName.startsWith(href);

    return (
        <Link 
            href={href}
            className={`
                px-4 py-2 rounded-lg transition-all duration-200 font-medium
                ${isActive 
                    ? "text-cyan-400 bg-purple-950/50 border border-cyan-800/50" 
                    : "text-gray-300 hover:text-cyan-400 hover:bg-white/5"}
            `}
        >
            {children}
        </Link>
    );
};

export default NavLink;