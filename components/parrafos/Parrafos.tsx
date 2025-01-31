import React from "react";
import { Block, ParrafosProps } from "@/types/types";

const Parrafos = ({ contenido }: { contenido: Block[] }) => {
  console.log(contenido)

  return (
    <div className="">
      {contenido?.map((item: Block, i: any) => {
        
        const text = item.children[0].text; ///////////////////////////
        const style = item.style

        if (style === "h5") {
          if (text !== "") {
            return (
              <div key={i}>
                <h5
                  className="space-y-2 indent-8 text-gray-500 font-extrabold text-justify text-lg "
                  key={i}
                >
                  {text}
                </h5>
              </div>
            );
          } else {
            return <div key={i} className="h-[1.125rem] w-full"></div>;
          }
        }
        if (style == "normal") {
          if (text !== "") {
            return (
              <div key={i}>
                <p
                  className={`space-y-2  ${item.listItem === "bullet" ? "list-item list-disc ml-14 indent-2" : "indent-8"} text-gray-500 font-medium text-justify text-lg `}
                  key={i}
                >
                  {text}
                </p>
              </div>
            );
          } else {
            return <div key={i} className="h-[1.125rem] w-full"></div>;
          }
        }
        if (style == "h4") {
          if (text !== "") {
            return (
              <div key={i}>
                <h4
                  className="space-y-2 indent-8 text-gray-500  font-black text-justify text-xl "
                  key={i}
                >
                  {text}
                </h4>
              </div>
            );
          } else {
            return <div key={i} className="h-[1.25rem] w-full"></div>;
          }
        }
        if (style == "h3") {
          if (text !== "") {
            return (
              <div key={i}>
                <h3
                  className="space-y-2 indent-8 text-gray-500 font-black text-justify text-2xl "
                  key={i}
                >
                  {text}
                </h3>
              </div>
            );
          } else {
            return <div key={i} className="h-[1.5rem] w-full"></div>;
          }
        }

        if (style == "h2") {
          if (text !== "") {
            return (
              <div key={i}>
                <h2
                  className="space-y-2 indent-8 text-gray-500 font-black text-justify text-3xl "
                  key={i}
                >
                  {text}
                </h2>
              </div>
            );
          } else {
            return <div key={i} className="h-[1.875rem] w-full"></div>;
          }
        }

        if (style == "h1") {
          if (text !== "") {
            return (
              <div key={i}>
                <h3
                  className="space-y-2 indent-8 text-gray-500 font-black text-justify text-4xl "
                  key={i}
                >
                  {text}
                </h3>
              </div>
            );
          } else {
            return <div key={i} className="h-[2.25rem] w-full"></div>;
          }
        }
      })}
    </div>
  );
};

export default Parrafos;
