"use client";
import React from "react";
import { LiaFacebook } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { IoMdContact } from "react-icons/io";
import { IconsProps } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Icons = ({ show, setShow, color, name }: IconsProps) => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <div className="w-full flex flex-row justify-between items-center">
      {name && pathname !== "/profile" && (
        <Link
          className={`${color} hover:bg-zinc-200 hover:text-black text-sm underline border-2 rounded-[10px] h-[1.6rem] flex justify-center items-center px-2 border-[${color}]`}
          href={"/profile"}
        >
          Profile
        </Link>
      )}
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

      <IoMdContact
        className={`text-4xl ${color} inline-block md:hidden`}
        onClick={() => setShow(!show)}
      />
    </div>
  );
};

export default Icons;
