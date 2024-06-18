"use client";
import Link from "next/link";
import React, { useState } from "react";

const GetInvolvePage = () => {
  const [showVolunteer, setShowVolunteer] = useState(false);
  const [showWishList, setShowWishList] = useState(false);
  return (
    <div className="bg-fixed bg-White bg-no-repeat bg-cover flex flex-col justify-start items-center py-12 w-full bg-opacity-80">
      <div className="w-[90%] flex flex-col justify-start items-stretch p-12 bg-white rounded-2xl space-y-4 max-w-5xl">
        <h1 className="text-cyan-500 text-5xl text-center font-black pb-8">
          Be the Catalyst for Change
        </h1>

        <h2 className="text-cyan-500 text-3xl text-justify font-semibold">
          Join Our Global Movement for Compassion
        </h2>

        <p className="text-cyan-500 text-xl text-justify indent-6 font-normal">
          At Magic Marble Foundation, we believe in the transformative power of
          collective action. You have the opportunity to be the driving force
          behind change, supporting our diverse initiatives in international
          animal rescue, community relief, education, free meal programs, and
          beyond. Here are inspiring ways you can play a vital role in making a
          difference:
        </p>

        <span className="text-cyan-500 text-xl text-justify indent-6 font-semibold">
          1. Sponsor a Rescue Mission:
        </span>
        <p className="text-cyan-500 text-xl text-justify indent-6 font-normal">
          Empower our international animal rescue efforts by sponsoring a
          mission. Your support ensures that our dedicated teams can reach the
          most vulnerable animals in need, providing them with care,
          rehabilitation, and a chance for a brighter future. Consider
          sponsoring a specific rescue to provide essential medical care and
          continued support.
        </p>
        <span className="text-cyan-500 text-xl text-justify indent-6 font-semibold">
          2. Community Relief Champions:
        </span>

        <p className="text-cyan-500 text-xl text-justify indent-6 font-normal">
          Become a Community Relief Champion by contributing to our initiatives
          aimed at supporting communities in times of need. Your donation can
          provide immediate relief, whether it is through emergency aid,
          rebuilding efforts, or sustainable community development projects.
        </p>

        <span className="text-cyan-500 text-xl text-justify indent-6 font-semibold">
          3. Educate for Empowerment:
        </span>

        <p className="text-cyan-500 text-xl text-justify indent-6 font-normal">
          Support our education programs that empower individuals and
          communities. Your contribution can fund educational resources,
          workshops, and training sessions that promote awareness, skills
          development, and a path to self-sufficiency.
        </p>

        <span className="text-cyan-500 text-xl text-justify indent-6 font-semibold">
          4. Nourish Souls with Free Meals:
        </span>

        <p className="text-cyan-500 text-xl text-justify indent-6 font-normal">
          Participate in our free meal programs, ensuring that no one goes
          hungry. Your donation can provide nourishing meals to those facing
          food insecurity, offering a lifeline to individuals and families in
          need.
        </p>

        <span className="text-cyan-500 text-xl text-justify indent-6 font-semibold">
          5. Global Ambassadors for Change:
        </span>

        <p className="text-cyan-500 text-xl text-justify indent-6 font-normal">
          Spread the word and become a Global Ambassador for [Non-Profit Name].
          Use your voice and social influence to raise awareness about our
          programs, inspiring others to join our mission of compassion.
        </p>

        <span className="text-cyan-500 text-xl text-justify indent-6 font-semibold">
          6. Volunteer Globally, Act Locally:
        </span>

        <p className="text-cyan-500 text-xl text-justify indent-6 font-normal">
          Whether you are passionate about hands-on involvement or contributing
          from afar, our volunteer opportunities cater to various skill sets.
          Engage in international projects or participate in local events that
          amplify our impact on both humans and non-humans.
        </p>

        <span className="text-cyan-500 text-xl text-justify indent-6 font-semibold">
          7. Sponsor a Rescue for Ongoing Care:
        </span>
        <p className="text-cyan-500 text-xl text-justify indent-6 font-normal">
          Make a lasting impact by sponsoring a rescue for ongoing care. Your
          sponsorship provides the necessary medical care, shelter, and support
          needed for rescued animals to thrive on their journey to recovery.
        </p>
        <span className="text-cyan-500 text-xl text-justify indent-6 font-semibold">
          8. Donate to Multiply Impact:
        </span>
        <p className="text-cyan-500 text-xl text-justify indent-6 font-normal">
          Make a financial contribution to [Non-Profit Name]. Your donation
          fuels our ability to adapt, innovate, and extend our reach, creating a
          lasting impact across borders.
        </p>
        <span className="text-cyan-500 text-xl text-justify indent-6 font-semibold">
          9. Fundraise for Change:
        </span>

        <p className="text-cyan-500 text-xl text-justify indent-6 font-normal">
          Host your fundraising event or campaign to support our cause. Your
          creativity and dedication can inspire a network of change-makers,
          exponentially increasing the impact of our programs.
        </p>
        <span className="text-cyan-500 text-xl text-justify indent-6 font-semibold">
          Together, We Create Change
        </span>
        <p className="text-cyan-500 text-xl text-justify indent-6 font-normal">
          Every action, no matter how small, has the power to create a ripple
          effect of positive change. Join us in building a world where
          compassion knows no boundaries. Be the catalyst for a future where
          both humans and non-humans thrive in harmony.
        </p>

        <h3 className="text-cyan-500 text-4xl text-center font-black">
          Choose Your Path to Compassion. Support Magic Marble Foundation Today.
        </h3>

        <div className="flex flex-row justify-around items-center py-8 w-full">
          <Link
            href={
              "https://docs.google.com/forms/d/1O9DbAEXwDj5_3pzSymk-hda3_rg2jV_WUmdVD8hFOP8/edit?ts=6670c3f0"
            }
            passHref
            target="_blank"
          >
            <div
              className="bg-cyan-500 text-white rounded-full font-semibold text-lg p-4 hover:bg-cyan-400"
              onMouseEnter={() => setShowVolunteer(true)}
              onMouseLeave={() => setShowVolunteer(false)}
            >
              Volunteer Application
            </div>
          </Link>
          <Link
            href={
              "https://www.amazon.com/hz/wishlist/ls/28XXCDR4D7G5V?ref_=wl_share"
            }
            passHref
            target="_blank"
          >
            <div
              className=" bg-cyan-500 text-white rounded-full font-semibold text-lg p-4 hover:bg-cyan-400"
              onMouseEnter={() => setShowWishList(true)}
              onMouseLeave={() => setShowWishList(false)}
            >
              Amazon Wish List
            </div>
          </Link>
        </div>
        <div className="flex justify-center items-center w-full">
          {showVolunteer && (
            <div className="w-full max-w-[300px] sm:max-w-[600px] text-gray-500 text-lg indent-6 text-justify">
              Join us in making a difference! We are thrilled that you're
              considering becoming a volunteer with us. By completing our
              volunteer application, you are taking the first step towards
              contributing your time and skills to support our cause. Whether
              you are passionate about animals, community service, or both, there
              are various ways you can get involved and help us create a better
              tomorrow. Fill out the application form below to begin your
              journey with us.
            </div>
          )}
          {showWishList && (
            <div className="w-full max-w-[300px] sm:max-w-[600px] text-gray-500 text-lg indent-6 text-justify">
              Welcome to our Amazon Wish List! Here, you can directly support
              our efforts to care for rescue animals and serve our communities
              by donating much-needed supplies. Every item you contribute helps
              us continue our mission to make a positive impact where it is
              needed most. Browse through the list below to see how you can make
              a difference today.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetInvolvePage;
