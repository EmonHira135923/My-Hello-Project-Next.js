import React from 'react';

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Taxi Kitchen for any queries, support, or feedback. We are here to help you with your food delivery needs.",
};

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12 min-h-screen bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Side: Contact Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              Get in Touch <span className="text-blue-600">With Us</span>
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Have a question about our menu, delivery, or a recent order? 
              Fill out the form and our team will get back to you within 24 hours.
            </p>
          </div>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                📍
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Our Location</h3>
                <p className="text-gray-500 text-sm">123 Foodie Street, Kitchen City, DH 1207</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center shrink-0">
                📞
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Phone Number</h3>
                <p className="text-gray-500 text-sm">+880 1234 567 890</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center shrink-0">
                ✉️
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Email Support</h3>
                <p className="text-gray-500 text-sm">support@taxikitchen.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Subject</label>
              <input 
                type="text" 
                placeholder="How can we help?"
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Message</label>
              <textarea 
                rows="4"
                placeholder="Write your message here..."
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-100 transition-all active:scale-[0.98]">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;