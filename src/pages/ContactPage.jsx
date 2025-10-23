 import React from "react";

function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* 🌟 Left Section — Contact Info + Form */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 mb-8">
            Have questions, feedback, or want to collaborate with TechRica?
            Fill out the form and we’ll get back to you as soon as possible.
          </p>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 mt-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 mt-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-3 mt-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* 🌈 Right Section — Illustration or Info */}
        <div className="hidden md:block">
          <img
            src="https://cdn.dribbble.com/users/2113370/screenshots/14513915/media/ed0c28a9a5848b58e930cc2c64b78d28.png"
            alt="Contact illustration"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
