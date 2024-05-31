"use client";

import Heading from "@/components/headings/heading";
import HeadingCenterAnimation from "@/components/headingsAnimations/HeadingCenterAnimation";
import Paypal from "@/components/payments/paypal";
import Venmo from "@/components/payments/venmo";
import VideoFrame from "@/components/videoFrame/videoframe";
import Image from "next/image";

const DonationsPage = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row">
      <div className="w-full lg:w-1/2 p-4 hidden md:flex justify-center items-center">
        <div className="md:w-[600px] md:h-[400px] lg:max-w-[800px] lg:h-[700px]  relative p-10 md:p-1 flex justify-center items-center">
          <VideoFrame
            src="https://www.youtube.com/embed/_cj-XrMSUWM?autoplay=1&mute=1"
            bg={"bg-white"}
          />
        </div>
      </div>
      <div className="w-full flex flex-col lg:w-1/2">
        <div className="mt-4 md:mt-10 lg:mt-24">
          <HeadingCenterAnimation>
            <Heading
              title="Help Us Help Them"
              color="text-cyan-500"
              shadow=""
              textSize="text-2xl lg:text-5xl"
              center="flex justify-center"
            />
          </HeadingCenterAnimation>
        </div>
        <p className="w-full lg:w-full indent-6 text-justify text-gray-500 p-8">
          Your donation is 100% dedicated to those we serve, whether they are
          humans in need of food, medical care, or education, or non-human
          animals in need of rescue, sterilization, and advocacy. With our
          commitment to zero administrative salaries and minimal overhead costs,
          we guarantee that your contribution will make a tangible difference.
          Join us in making a real impact in the lives of those who need it
          most.
        </p>
        <div className="flex flex-col md:flex-row w-full bg-white justify-center items-center">
          <Paypal />
          <Venmo />
        </div>
      </div>
    </div>
  );
};

export default DonationsPage;
