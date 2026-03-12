import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Join My Project | Create Your Account",
  description: "Join My Project today! Sign up to discover amazing food, get exclusive discounts, and enjoy the fastest food delivery experience.",
};

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Brand Logo */}
        <h2 className="text-center text-4xl font-black text-gray-900 tracking-tight">
          MY <span className="text-blue-600">PROJECT</span>
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Create an account to start your food journey.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-xl shadow-blue-50/50 rounded-3xl border border-gray-100 sm:px-10">
          <form className="space-y-5">
            {/* Full Name Field */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-sm"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                Email Address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-sm"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-sm"
                  required
                />
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-xs text-gray-600">
                I agree to the <span className="text-blue-600 font-bold cursor-pointer">Terms</span> and <span className="text-blue-600 font-bold cursor-pointer">Privacy Policy</span>
              </label>
            </div>

            {/* Register Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-lg shadow-blue-100 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all active:scale-95"
              >
                Create Account
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-400 font-medium">Already a member?</span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/login"
                className="w-full flex items-center justify-center px-4 py-2.5 border border-blue-600 rounded-xl bg-white text-sm font-bold text-blue-600 hover:bg-blue-50 transition-all"
              >
                Log In to Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;