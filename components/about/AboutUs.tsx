"use client";
import React from "react";
import Heading from "../headings/heading";
import HeadingAboutAnimation from "../headingsAnimations/HeadingAboutAnimation";
import Image from "next/image";

const AboutUs = () => {
  return (
    <HeadingAboutAnimation>
      <div className="flex flex-col-reverse justify-end md:flex-row md:items-center md:justify-center w-full h-[90vh]">
        <div className="w-full md:w-[50%] flex flex-col justify-between md:justify-center items-center space-y-10">
          <div className="w-full relative text-wrap pt-8 md:pt-0">
            <Heading
              title="About Magic Marble Foundation"
              color="text-cyan-500"
              shadow=""
              textSize="text-3xl md:text-5xl"
              center="text-center lg:text-left"
            />
          </div>
          <div className=" w-full">
            <p className="w-full indent-6 text-base md:text-lg lg:text-xl text-gray-500 font-medium text-justify ">
              Magic Marble Foundation works to alleviate the suffering of
              underprivileged human and non-human animal populations by
              providing planet-friendly support including food, housing, medical
              treatment, education, and the financial assistance required to
              procure these basic needs.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[50%] flex flex-col justify-center items-center">

          <div className="w-[220px] md:w-[330px] h-[220px] md:h-[330px] relative">
            {/* photo container */}
            <Image
              className="object-cover object-top"
              src="/logo.jpg"
              fill
              alt="Magic Marbel Foundation"
              priority={true}
            />
          </div>

        </div>
      </div>
    </HeadingAboutAnimation>
  );
};

export default AboutUs;
