import React from 'react';

const PaddyFieldMaintenancePage = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white via-cyan-300 to-white flex flex-col items-center justify-center min-h-screen">
      <div className="bg-transparent p-10 rounded-lg text-center">
        <h1 className="text-4xl font-bold text-cyan-800 mb-4">
          This page is under maintenance
        </h1>
        <p className="text-lg text-gray-700">
          We are currently working on improvements. Please check back later.
        </p>
        <div className="mt-6">
          <svg
            className="w-16 h-16 text-cyan-800 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v4m0 8v4m4-4h4m-8 0H4m4-4H4m8 0h4m-4-4V4m0 8v4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PaddyFieldMaintenancePage;