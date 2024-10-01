import React from 'react';
import { VscArrowSmallRight } from "react-icons/vsc";

const CircalData = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row items-center justify-center p-4">
      <div className="w-full md:w-1/2 flex flex-col gap-4 justify-between p-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left">
          Your work, everywhere you are
        </h1>
        <p className="text-center md:text-left text-sm md:text-base lg:text-lg">
          Access your notes from your computer, phone, or tablet by synchronizing with various services, including Whitepace, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, Android, and iOS. A terminal app is also available!
        </p>
        
        <div className="flex justify-center md:justify-start">
          <button className="flex rounded justify-center px-4 md:px-5 lg:px-6 py-2 md:py-3 items-center bg-[#4F9CF9] text-white hover:bg-[#3B7CC8] transition duration-300">
            Try Taskey
            <VscArrowSmallRight className="ml-2" />
          </button>
        </div>
      </div>

      <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mt-8 md:mt-0">
        {/* Central icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-blue-100 p-2 sm:p-3 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>
        </div>

        {/* Surrounding icons */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 absolute top-0 left-0">
          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 absolute top-0 right-0">
          <circle cx="12" cy="12" r="8"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12" y2="8"></line>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 absolute bottom-0 right-0">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 absolute bottom-0 left-0">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>

        {/* Connecting lines and circles */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 16 L168 80 L312 16" fill="none" stroke="#E6E6E6" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M24 144 L168 80 L312 144" fill="none" stroke="#E6E6E6" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="24" cy="80" r="4" fill="#E6E6E6" />
          <circle cx="312" cy="80" r="4" fill="#E6E6E6" />
          <circle cx="168" cy="16" r="4" fill="#E6E6E6" />
          <circle cx="168" cy="144" r="4" fill="#E6E6E6" />
        </svg>

        {/* Dotted border */}
        <div className="absolute inset-0 border-2 border-blue-200 border-dashed rounded-full"></div>
      </div>
    </div>
  );
};

export default CircalData;
