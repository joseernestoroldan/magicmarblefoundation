"use client";

import Heading from "@/components/headings/heading";
import HeadingCenterAnimation from "@/components/headingsAnimations/HeadingCenterAnimation";
import Paypal from "@/components/payments/paypal";
import Venmo from "@/components/payments/venmo";
import Image from "next/image";

const DonationsPage = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row">
      <div className="w-full lg:w-1/2 p-4 hidden md:flex justify-center items-center">
        <div className="md:w-[600px] md:h-[400px] lg:w-[500px] lg:h-[500px]  relative p-10 flex justify-center items-center">
          <Image fill src="/uno.jpg" alt="" />
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
        <p className="w-full lg:w-[900px] indent-6 text-justify text-gray-500 p-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          asperiores voluptate quae veritatis, odio vero, fugit nulla ut debitis
          nisi animi mollitia in quis distinctio aperiam! Unde nam provident,
          odit, corrupti modi blanditiis debitis inventore perferendis labore
          qui illo asperiores rem reiciendis, officiis commodi veniam recusandae
          ducimus? Sint laboriosam cumque et velit beatae tempora facere labore
          quisquam? Laborum quasi mollitia et placeat labore alias reiciendis
          necessitatibus, ab quae commodi aliquam facilis saepe amet sed neque.
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
