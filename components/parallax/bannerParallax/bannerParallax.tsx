import React from "react";
import { BannerProps } from "@/types/types";
import Container from "../../layouts/container/Container";

const BannerParallax = ({ title, message, bg, justify }: BannerProps) => {

  return (
    <div className="relative w-full h-auto flex items-center justify-center my-24">
      <div className="flex flex-col -space-y-7 items-center w-full">
        {title !== "" && (
          <h2 className={`${bg} text-gray-500 rounded-full py-4 px-10 text-center w-60 font-bold text-2xl z-10`}>
            {title}
          </h2>
        )}

        <Container>
          <div className="w-full">
            <p className={`${justify} max-w-[1000px] mx-auto italic py-24 border-t border-b border-gray-500 text-gray-500 font-medium text-xl`}>
              {message}
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BannerParallax;
