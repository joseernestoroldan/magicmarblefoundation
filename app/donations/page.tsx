"use client";

import Heading from "@/components/headings/heading";
import HeadingCenterAnimation from "@/components/headingsAnimations/HeadingCenterAnimation";
import CreditCard from "@/components/payments/creditCard";
import Paypal from "@/components/payments/paypal";
import Venmo from "@/components/payments/venmo";
import VideoFrame from "@/components/videoFrame/videoframe";
import { Clock, Home } from "lucide-react";
import Link from "next/link";

const DonationsPage = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-white flex items-center justify-center px-4">
      <div className="max-w-[1000px] w-full text-center space-y-8">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center">
            <Clock className="w-8 h-8 text-cyan-500" />
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-2xl text-gray-900 font-bold">
            Page Temporarily Unavailable
          </h1>
          <div className="w-80 h-0.5 bg-cyan-500 mx-auto"></div>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <p className="text-gray-500 leading-relaxed text-justify text-xl font-bold">
            Due to improvements on our platform, our donation portal will be
            temporarily closed. We appreciate your patience during this time.
          </p>
          <p className="text-gray-500 leading-relaxed text-justify">
            To support Magic Marble Foundation, you can still donate:
          </p>

          <p className="text-gray-500 leading-relaxed text-justify font-bold">
            💰 Venmo: @MagicMarble📧
          </p>
          <p className="text-gray-500 leading-relaxed text-justify font-bold">
            📧 PayPal: @HelpMagicMarble
          </p>
          <p className="text-gray-500 leading-relaxed text-justify font-bold">
            📮 Mail checks to: Magic Marble Foundation 455 E. Eisenhower Parkway
            #355 Ann Arbor, MI 48108
          </p>

          <p className="text-gray-500 leading-relaxed text-justify italic">
            Your support helps us continue our mission to create a kinder world
            for all beings. Thank you for your generosity and patience as we
            work to improve your donation experience.
          </p>
        </div>

        {/* Home Link */}
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-200 font-medium">
            <Home className="w-4 h-4" />
            Go Home
          </Link>
        </div>

        {/* Decorative element */}
        <div className="flex justify-center space-x-1 pt-8">
          <div className="w-2 h-2 bg-cyan-500/20 rounded-full"></div>
          <div className="w-2 h-2 bg-cyan-500/40 rounded-full"></div>
          <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
        </div>
      </div>
    </div>
    // <div className="flex flex-col-reverse lg:flex-row">
    //   <div className="w-full lg:w-1/2 p-0 hidden md:flex justify-center items-center">
    //     <div className="w-full relative p-0 md:pt-10 lg:pt-24 flex justify-center items-center">
    //       <div className="w-full flex flex-col justify-center  items-stretch ">
    //         <VideoFrame
    //           src="https://www.youtube.com/embed/y2xP3mCkCSU?autoplay=1&mute=1"
    //           bg={"bg-white"}
    //         />
    //         <p className="text-gray-500 text-justify"></p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="w-full flex flex-col items-center lg:w-1/2 bg">
    //     <div className="mt-4 md:mt-10 lg:mt-24">
    //       <HeadingCenterAnimation>
    //         <Heading
    //           title="Help Us Help Them"
    //           color="text-cyan-500"
    //           shadow=""
    //           textSize="text-2xl lg:text-5xl"
    //           center="flex justify-center"
    //         />
    //       </HeadingCenterAnimation>
    //     </div>
    //     <p className="w-full lg:w-full indent-6 text-justify text-xl text-gray-500 p-8">
    //       Your donation is 100% dedicated to those we serve, whether they are
    //       humans in need of food, medical care, or education, or non-human
    //       animals in need of rescue, sterilization, and advocacy. With our
    //       commitment to zero administrative salaries and minimal overhead costs,
    //       we guarantee that your contribution will make a tangible difference.
    //       Join us in making a real impact in the lives of those who need it
    //       most.
    //     </p>
    //     <div className="flex flex-col md:flex-row w-full bg-white justify-center items-center md:space-x-4">
    //       <Paypal />
    //       <Venmo />
    //       <CreditCard/>
    //     </div>
    //   </div>
    // </div>
  );
};

export default DonationsPage;
