import React from "react";
import SubHeading from "../headings/subheading";
import Image from "next/image";
import LayoutY from "../layouts/layoutY/LayoutY";

const OurPartners = () => {
  return (
    <LayoutY>
      <SubHeading title="Our Partners" />
      <div className="flex flex-col justify-around items-center md:flex-row w-full">
        <div className="relative w-[200px] h-[200px]">
          <Image
            className="object-contain"
            src={"/helpAnimalsIndia.webp"}
            alt="help animals india"
            fill
          />
        </div>
        <div className="relative w-[200px] h-[200px]">
          <Image
            className="object-contain"
            src={"veganGroup.webp"}
            alt="help animals india"
            fill
          />
        </div>
        <div className="relative w-[200px] h-[200px]">
          <Image
            className="object-contain"
            src={"wellFed.webp"}
            alt="help animals india"
            fill
          />
        </div>
      </div>
    </LayoutY>
  );
};

export default OurPartners;
