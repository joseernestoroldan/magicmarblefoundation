import React from "react";
import { BannerDonationProps } from "@/types/types";



const BannerDonation = ({url, title, message}: BannerDonationProps) => {
    
  return (
    <div className={`bg-cyan-500 w-full flex flex-col justify-center items-center space-y-6 py-80 ${url} bg-no-repeat bg-center bg-cover`}>
      <h2 className="rounded-2xl text-white font-bold text-4xl bg-black bg-opacity-70 p-6">
        
        {title}
      </h2>
      <p className="bg-black bg-opacity-70 rounded-2xl text-white font-medium text-xl p-4">
        
        {message}
      </p>
    </div>
  );
};

export default BannerDonation;
