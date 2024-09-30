"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import React from "react";
import { FaMailchimp } from "react-icons/fa";

type chimpPopoverProps = {
  chimpData: any;
};

const monthNumberToString = (monthNumber: string) => {
  switch (monthNumber) {
    case "01":
      return "January";
    case "02":
      return "February";
    case "03":
      return "March";
    case "04":
      return "April";
    case "05":
      return "May";
    case "06":
      return "June";
    case "07":
      return "July";
    case "08":
      return "Agost";
    case "09":
      return "September";
    case "10":
      return "October";
    case "11":
      return "November";
    case "12":
      return "December";
  }
};

const ChimpPopover = ({ chimpData }: chimpPopoverProps) => {
    
  const stringToDate = (stringDate: string) => {
    const str = stringDate;
    const year = str.substring(0, 4);
    const mounthNumber = str.substring(5, 7);
    const month = monthNumberToString(mounthNumber)
    const day = str.substring(8, 10);
    return { day: day, month: month, year: year };
  };

  return (
    <div className="fixed right-2 top-2 z-40">
      <Popover>
        <PopoverTrigger asChild>
          <button>
            <FaMailchimp className={`text-3xl text-gray-200`} />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-80 sm:w-[400px] bg-gray-800 rounded-l-[5px] bg-opacity-90">
          <div className="text-white text-lg text-center py-4">
            This Are The Newest Chimps
          </div>
          <div className="text-white text-base px-4 py-4">
            {chimpData.map((item: any, index: number) => {
              const date = stringToDate(item._createdAt);
              return (
                <div className="py-4" key={index}>
                  <p className="font-normal text-lg">
                    {date.month} | {date.year}
                  </p>
                  <p className="font-semibold text-lg">{item.title}</p>
                </div>
              );
            })}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ChimpPopover;
