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
    <div className="mt-1 text-sm text-gray-500 font-semibold italic flex space-x-1">
      <span>{monthName}</span>
      <span>{day},</span>
      <span>{year}</span>
      <span>Hours:</span>
      <span>{hour}</span>
    </div>
  );
};

export default Dates;
