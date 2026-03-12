import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const Navvbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        {/* LEFT: Logo Section */}
        <div className="flex-1">
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            My Hello Project
          </Link>
        </div>

        {/* CENTER: Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <NavLink href="/tutorials">
            Tutorials
          </NavLink>
          <NavLink href="/stories">
            Stories
          </NavLink>
          <NavLink href="/foods">
            Foods
          </NavLink>
          <NavLink href="/reviews">
            Reviews
          </NavLink>
          <NavLink href="/about">
            About Us
          </NavLink>
        </div>

        {/* RIGHT: Auth Buttons */}
        <div className="flex-1 flex justify-end items-center gap-5">
          <NavLink href="/login">
            Login
          </NavLink>
          <NavLink href="/register">
            Register
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navvbar;
