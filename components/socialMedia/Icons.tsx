"use client"
import React from "react";
import { LiaFacebook } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";
import { FaMailchimp } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { IoMdContact } from "react-icons/io";
import { IconsProps } from "@/types/types";
import Link from "next/link";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


const Icons = ({show, setShow, color }: IconsProps) => {
  return (
    <div className="w-full flex flex-row justify-between items-center">   

      <Link
        href={"https://www.facebook.com/magicmarblefoundation?mibextid=JRoKGi"}
        passHref
        target="_blank"
      >
        <LiaFacebook className={`text-4xl ${color}`} />
      </Link>
      <Link
        href={
          "https://www.instagram.com/magicmarblefoundation?igsh=MW1ybzdlZGZ2cnNkdA%3D%3D&utm_source=qr"
        }
        passHref
        target="_blank"
      >
        <LiaInstagram className={`text-4xl ${color}`} />
      </Link>
      <Link
        href={"https://www.youtube.com/@magicmarble2478"}
        passHref
        target="_blank"
      >
        <TiSocialYoutubeCircular className={`text-4xl ${color}`} />
      </Link>

      <IoMdContact className={`text-4xl ${color} inline-block md:hidden`} onClick={() => setShow(!show)} />
    </div>
  );
};

export default Icons;
