import React from "react";

type MyDateProps = {
  year: string;
  month: string;
  day: string;
  hour: string;
  monthName: string ;
};

const Dates = ({hour, day, month, year, monthName}: MyDateProps ) => {
    console.log("aqui:", hour )
  return (
    <div>
      <span className="m-1 text-lg  text-gray-500 italic ">Published at:</span>
      <span className="m-1 text-lg  text-gray-500 font-medium ">{monthName}</span>
      <span className="m-1 text-lg  text-gray-500 font-medium ">{day},</span>
      <span className="m-1 text-lg  text-gray-500 font-medium ">{year}</span>
      <span className="m-1 text-lg  text-gray-500 italic ">Hours:</span>
      <span className="m-1 text-lg  text-gray-500 font-medium ">{hour}</span>
    </div>
  );
};

export default Dates;
