import Anavvar from '@/Componets/Shared/Anavvar';
import Aside from '@/Componets/Shared/Aside';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar: Hidden on mobile, visible on medium screens and up */}
            <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                <Aside />
            </div>

            {/* Main Content Wrapper: Add margin-left to clear the fixed sidebar */}
            <div className="flex flex-col flex-1 md:pl-64">
                
                {/* Top Navigation Bar */}
                <header className="sticky top-0 z-10 bg-white shadow-sm">
                    <Anavvar />
                </header>

                {/* Page Content */}
                <main className="flex-1 p-6">
                    <div className="mx-auto max-w-7xl">
                        {children}
                    </div>
                </main>
                
            </div>
        </div>
    );
};

export default DashboardLayout;