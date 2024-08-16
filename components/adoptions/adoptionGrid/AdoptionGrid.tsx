"use client";
import React, { useState } from "react";

const AdoptionGrid = () => {
  const [expand, setExpand] = useState<boolean>(false);

  const adoptions = [
    { number: 0 },
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 0 },
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 0 },
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto flex justify-center items-center flex-col my-8 space-y-8">
        <button className= "text-cyan-500 border border-cyan-500 py-2 px-4 rounded-full max-w-[250px]" onClick={() => {setExpand(!expand)}}>{expand? "Colapse Grid" : "Expand Grid"}</button>
     
      {expand && (
        <div className="w-full max-w-5xl mx-auto flex flex-row flex-wrap justify-center gap-4">
          {adoptions.map((item, index) => {
            return (
              <div key={index} className="w-[300px] h-[300px] bg-gray-200 rounded-[5px]"></div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AdoptionGrid;
