"use client";
import React from "react";
import { Button } from "../../ui/button";
import EnterElement from "@/components/animations/enterElement/EnterElement";
import Link from "next/link";
import BannerDonation from "./BannerDonation";
import BannerAnimation from "./BannerAnimation";
import EnterSection from "@/components/animations/enterSection/EnterSection";

const Donations = () => {
  return (
    <EnterSection>
      <div className="relative bg-white w-full h-[800px] overflow-hidden">
        <BannerAnimation
          initial={0}
          times={[0, 0.01, 0.15, 0.18]}
          opacity={[0, 1, 1, 0]}
          duration={20}
        >
          <BannerDonation
            url="bg-[url('/uno.webp')]"
            title="Help end the suffering of homeless animals"
            message="Please support our spay, neuter and vaccination efforts"
          />
        </BannerAnimation>
        <BannerAnimation
          initial={0}
          times={[0.15, 0.18, 0.50, 0.51]}
          opacity={[0, 1, 1, 0]}
          duration={20}
        >
          <BannerDonation
            url="bg-[url('/trainning.webp')]"
            title="Advanced Veterinary Skills Training"
            message="Help Homeless Animals Receive Better Care"
          />
        </BannerAnimation>

        <BannerAnimation
          initial={0}
          times={[0.51, 0.52, 0.82, 0.85]}
          opacity={[0, 1, 1, 0]}
          duration={20}
        >
          <BannerDonation
            url="bg-[url('/sterilization.webp')]"
            title="Support Our Sterilization Programs"
            message="Every spay and neuter prevents generations of suffering "
          />
        </BannerAnimation>
        <BannerAnimation
          initial={0}
          times={[0.82, 0.85, 0.9999, 1]}
          opacity={[0, 1, 1, 1]}
          duration={20}
        >
          <BannerDonation
            url="bg-[url('/sanctuary.webp')]"
            title="Support The Farm Sanctuary"
            message="Planet Costa Rica!"
          />
        </BannerAnimation>

        <div className="absolute bottom-32 sm:bottom-52 left-1/2 -translate-x-1/2">
          <Link href={"/donations"}>
            <Button
              size={"lg"}
              className="text-white text-xl font-bold bg-cyan-500 rounded-full hover:bg-gray-100 hover:shadow-md hover:shadow-gray-300 px-10 w-80"
            >
              Donate
            </Button>
          </Link>
        </div>
      </div>
    </EnterSection>
  );
};

export default Donations;
