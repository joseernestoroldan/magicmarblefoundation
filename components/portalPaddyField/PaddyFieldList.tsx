import React from "react";
import { Date } from "@/utils/date";
import Dates from "../date/Date";
import Link from "next/link";

const PaddyFieldList = ({ paddyFieldPosts }: any) => {
  
  return (
    <div className="w-1/3 h-[50vh] flex flex-col items-center bg-green-200 rounded-r-[10px]  px-4 pt-8 overflow-y-scroll paddyfield-scroll">
      <h2 className="text-2xl text-gray-500 font-semibold">Recent Entries</h2>
      {paddyFieldPosts.map((item: any, index: number) => {
        const dateString = item._createdAt;
        const myDate = Date(dateString);

        return (
          <div key={index} className="my-4">
            <Link href={`paddyfield/${item._id}`}>
              <p className="text-gray-500 text-base font-semibold">
                {item.title}
              </p>
              <Dates
                hour={myDate.hour}
                day={myDate.day}
                month={myDate.month}
                year={myDate.year}
                monthName={myDate.monthName}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PaddyFieldList;
