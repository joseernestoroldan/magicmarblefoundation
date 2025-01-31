import React from "react";

type MyDateProps = {
  year: string;
  month: string;
  day: string;
  hour: string;
  monthName: string ;
};

const Dates = ({hour, day, month, year, monthName}: MyDateProps ) => {
  return (
    <div>
      <span className="m-1 text-base  text-gray-500 font-medium ">{monthName}</span>
      <span className="m-1 text-base  text-gray-500 font-medium ">{day},</span>
      <span className="m-1 text-base  text-gray-500 font-medium ">{year}</span>
      <span className="m-1 text-base  text-gray-500 italic ">Hours:</span>
      <span className="m-1 text-base  text-gray-500 font-medium ">{hour}</span>
    </div>
  );
};

export default Dates;
