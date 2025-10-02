"use client";
import Heading from "@/components/headings/heading";
import HeadingCenterAnimation from "@/components/headingsAnimations/HeadingCenterAnimation";
import Paypal from "@/components/payments/paypal";
import Venmo from "@/components/payments/venmo";
import VideoFrame from "@/components/videoFrame/videoframe";
import { Clock, Home } from "lucide-react";
import Link from "next/link";

const DonationsPage = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row w-full max-w-7xl mx-auto">
      <div className="w-full lg:w-1/2 p-0 hidden md:flex justify-center items-center">
        <div className="w-full relative p-0 md:pt-10 lg:pt-24 flex justify-center items-center">
          <div className="w-full flex flex-col justify-center  items-stretch ">
            <VideoFrame
              src="https://www.youtube.com/embed/y2xP3mCkCSU?autoplay=1&mute=1"
              bg={"bg-white"}
            />
            <p className="text-gray-500 text-justify"></p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center lg:w-1/2 bg">
        <div className="mt-4 md:mt-10 lg:mt-24">
          <HeadingCenterAnimation>
            <Heading
              title="Help Us Help Them"
              color="text-cyan-500"
              shadow=""
              textSize="text-3xl"
              center="flex justify-center"
            />
          </HeadingCenterAnimation>
        </div>
        <p className="w-full lg:w-full indent-6 text-justify text-xl text-gray-500 p-8">
          Your donation is 100% dedicated to those we serve, whether they are
          humans in need of food, medical care, or education, or non-human
          animals in need of rescue, sterilization, and advocacy. With our
          commitment to zero administrative salaries and minimal overhead costs,
          we guarantee that your contribution will make a tangible difference.
          Join us in making a real impact in the lives of those who need it
          most.
        </p>
        <div className="flex flex-col md:flex-row w-full bg-white justify-center items-center md:space-x-4">
          <Paypal />
          {/* <CreditCard /> */}
          <Venmo />
        </div>
      </div>
    </div>
  );
};

export default DonationsPage;
