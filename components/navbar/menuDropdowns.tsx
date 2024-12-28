"use client";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuDropdowns = () => {
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isOpenChange, setIsOpenChange] = useState(false);
  const pathname = usePathname()
  return (
    <div className="hidden flex-row space-x-3 font-medium items-center lg:flex">
      <Link href={"/"} className={`${pathname === "/" ? "hidden" : "inline-block"}`}>
        <div className="text-nowrap cursor-pointer hover:drop-shadow-md rounded-lg text-cyan-500 hover:text-gray-500 text-lg font-medium">
          Home
        </div>
      </Link>

      <Popover open={isOpenAbout}>
        <PopoverTrigger asChild>
          <button
            className="text-nowrap cursor-pointer hover:drop-shadow-md rounded-lg text-cyan-500 hover:text-gray-500 text-lg font-medium"
            onMouseOver={() => setIsOpenAbout(true)}
            onMouseLeave={() => setIsOpenAbout(false)}
          >
            About
          </button>
        </PopoverTrigger>
        <PopoverContent
          onMouseOver={() => setIsOpenAbout(true)}
          onMouseLeave={() => setIsOpenAbout(false)}
          className="bg-white bg-opacity-90"
        >
          <Link href={"/about"}>
            <div className="text-nowrap cursor-pointer hover:drop-shadow-md rounded-lg text-cyan-500 hover:text-gray-500 text-lg font-medium">
              About Us
            </div>
          </Link>

          <Link href={"/projectscarousel"}>
            <div className="text-nowrap cursor-pointer hover:drop-shadow-md rounded-lg text-cyan-500 hover:text-gray-500 text-lg font-medium">
              Projects
            </div>
          </Link>

          <Link href={"/diaries"}>
            <div className="text-nowrap cursor-pointer hover:drop-shadow-md rounded-lg text-cyan-500 hover:text-gray-500 text-lg font-medium">
              Magic Diaries
            </div>
          </Link>
          <Link href={"/newsletter"}>
            <div className="text-nowrap cursor-pointer hover:drop-shadow-md rounded-lg text-cyan-500 hover:text-gray-500 text-lg font-medium">
              Newsletter
            </div>
          </Link>
        </PopoverContent>
      </Popover>

      <Link href={"/gallery"} className={`${pathname === "/gallery" ? "hidden" : "inline-block"}`}>
        <div className="text-nowrap cursor-pointer hover:drop-shadow-md rounded-lg text-cyan-500 hover:text-gray-500 text-lg font-medium">
          Gallery
        </div>
      </Link>

      <Popover open={isOpenChange}>
        <PopoverTrigger asChild>
          <button
            className="text-nowrap cursor-pointer hover:drop-shadow-md rounded-lg text-cyan-500 hover:text-gray-500 text-lg font-medium"
            onMouseEnter={() => setIsOpenChange(true)}
            onMouseLeave={() => setIsOpenChange(false)}
          >
            Be The Change
          </button>
        </PopoverTrigger>
        <PopoverContent
          onMouseEnter={() => setIsOpenChange(true)}
          onMouseLeave={() => setIsOpenChange(false)}
          className="bg-white bg-opacity-90"
        >
          <Link href={"/adoptions"}>
            <div className="text-nowrap cursor-pointer hover:drop-shadow-md rounded-lg text-cyan-500 hover:text-gray-500 text-lg font-medium">
              Adopt
            </div>
          </Link>

          <Link href={"/sponsors"}>
            <div className="text-nowrap cursor-pointer hover:drop-shadow-md rounded-lg text-cyan-500 hover:text-gray-500 text-lg font-medium">
              Sponsor
            </div>
          </Link>

          <Link href={"/getinvolved"}>
            <div className="text-nowrap cursor-pointer hover:drop-shadow-md rounded-lg text-cyan-500 hover:text-gray-500 text-lg font-medium">
              Join Us
            </div>
          </Link>
        </PopoverContent>
      </Popover>

      <Link href={"/grantees"} className={`${pathname === "/grantees" ? "hidden" : "inline-block"}`}>
        <div className="text-nowrap cursor-pointer hover:drop-shadow-md rounded-lg text-cyan-500 hover:text-gray-500 text-lg font-medium">
          Our Grantees
        </div>
      </Link>

      <Link href={"/paddyfield"} className={`${pathname === "/paddyfield" ? "hidden" : "inline-block"}`}>
        <div className="text-nowrap cursor-pointer hover:drop-shadow-md  text-green-400 hover:text-gray-500 text-lg font-medium bg-transparent">
          Paddy Field
        </div>
      </Link>

      

    </div>
  );
};

export default MenuDropdowns;
