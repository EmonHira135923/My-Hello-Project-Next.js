"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Footer = () => {
  const pathName = usePathname();

  if(pathName.startsWith("/dashboard")) return <></>;

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              My Hello Project
            </Link>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              Practicing modern web development with Next.js, Tailwind CSS, and passion. Building the future, one component at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/tutorials" className="hover:text-cyan-400 transition-colors">Tutorials</Link></li>
              <li><Link href="/stories" className="hover:text-cyan-400 transition-colors">Stories</Link></li>
              <li><Link href="/showcase" className="hover:text-cyan-400 transition-colors">Showcase</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h4 className="text-white font-semibold mb-6">Stay Connected</h4>
            <div className="flex gap-4">
              {/* Simple placeholder Social Icons */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-cyan-500/50 cursor-pointer transition-all">
                  <div className="w-4 h-4 bg-slate-400 rounded-sm"></div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-slate-500 italic">
              Currently version 1.0.0
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} My Hello Project. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-slate-400 text-xs font-medium uppercase tracking-widest">System Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;