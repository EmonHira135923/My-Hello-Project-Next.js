import Banner from '@/Componets/Shared/Banner';
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500/30">
      {/* Navigation */}
      <main className="max-w-7xl mx-auto px-8 py-12">
        {/* Hero Section */}
        <Banner/>

        {/* Bento Grid Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
          {/* Large Card */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-colors group">
            <div className="h-40 w-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl mb-6 overflow-hidden">
               <div className="flex items-center justify-center h-full text-cyan-400 font-mono">
                 server_components.tsx
               </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">React Server Components</h3>
            <p className="text-slate-400">Fetch data on the server and reduce client-side JavaScript for lightning fast loads.</p>
          </div>

          {/* Small Card 1 */}
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/50 transition-colors">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 text-purple-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Streaming</h3>
            <p className="text-slate-400 text-sm">Progressively render UI to improve perceived performance.</p>
          </div>

          {/* Small Card 2 */}
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 transition-colors">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6 text-emerald-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">App Router</h3>
            <p className="text-slate-400 text-sm">Nested layouts, error handling, and loading states out of the box.</p>
          </div>

          {/* Long Horizontal Card */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-slate-900/50 border border-slate-800 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Next-Gen Performance</h3>
              <p className="text-slate-400">Optimized images, fonts, and scripts to ensure your Core Web Vitals stay green.</p>
            </div>
            <div className="flex gap-2">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="w-16 h-16 rounded-2xl bg-slate-800 animate-pulse" />
               ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}