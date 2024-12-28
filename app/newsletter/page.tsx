import { getAllData } from "@/client";
import Link from "next/link";
import React from "react";

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

const ChimpNewsLetter = async () => {
  const chimpData = await getAllData("chimp");

  //filter the data to get the objects where the property chimpLink is different from null
  const FilteredData = chimpData.filter((data: any) => data.chimpLink !== null);

  const stringToDate = (stringDate: string) => {
    const str = stringDate;
    const year = str.substring(0, 4);
    const mounthNumber = str.substring(5, 7);
    const month = monthNumberToString(mounthNumber);
    const day = str.substring(8, 10);
    return { day: day, month: month, year: year };
  };

  return (
    <div className=" w-full max-w-3xl mx-auto flex flex-col justify-center space-y-8">
        <h1 className="text-center text-4xl font-bold text-cyan-500">Our Newsletter</h1>
      {FilteredData.map((newsletter: any) => {
        const date = stringToDate(newsletter._createdAt);
        return (
          <div key={newsletter._id} className="w-full py-8 px-16 bg-opacity-10  bg-gradient-to-b from-cyan-50 via-white to-cyan-50 rounded-[10px] text-cyan-500 hover:scale-110 hover:shadow-xl">
            <h2 className=" text-2xl font-bold">{newsletter.title}</h2>
            <Link
              href={newsletter.chimpLink}
              target="_blank"
              className="text-lg font-bold underline"
            >
              Read More
            </Link>
            <p className="text-lg font-medium text-">{newsletter.description}</p>
            <p className="font-normal">
              {date.month} | {date.year}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ChimpNewsLetter;
