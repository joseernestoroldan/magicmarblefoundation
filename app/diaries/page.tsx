// import { getAllData } from "@/client";
// import GridDIaries from "@/components/diaries/author/gridDiaries/GridDIaries";
// import Donations from "@/components/home/donations/Donations";
// import LayoutY from "@/components/layouts/layoutY/LayoutY";
// import { QueryType } from "@/types/types";

// const DiariesPage = async () => {
//   const diaries: QueryType[] = await getAllData("dairies");

//   return (
//     <LayoutY>
//       <div className="w-full max-w-5xl mx-auto min-h-[75vh] flex flex-col items-center justify-start">
//         <GridDIaries diaries={diaries} />
//       </div>

//       <Donations />
//     </LayoutY>
//   );
// };

// export default DiariesPage;

import React from 'react';

// You can copy and paste this SVG component directly into your file
const MaintenanceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-24 w-24 text-cyan-500 animate-spin-slow"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);


export default function App() {
  return (
    <>
      {/* We add a custom animation speed to the tailwind config or a style tag */}
      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
      `}</style>
      <div className="bg-white flex flex-col items-center justify-center min-h-[calc(100vh-250px)] text-center p-6 font-sans">
        <div className="mb-6">
          <MaintenanceIcon />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Under Maintenance
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
          We're currently performing some scheduled maintenance. We'll be back online shortly. Thank you for your patience!
        </p>
        <a
          href="/"
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          Go Back Home
        </a>
      </div>
    </>
  );
}

