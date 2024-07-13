import React from "react";
import { ParrafosProps } from "@/types/types";

const Parrafos = ({ data }: ParrafosProps) => {
  return (
    <div className="">
      {data.map((item: any, i: any) => {
        const contenido = item.contenido;

        return (
          <div key={i}>
            {contenido.map((item: any, i: any) => {
              const children = item.children[0].text; ///////////////////////////

              if (item.style === "h5") {
                if (children !== "") {
                  return (
                    <div key={i}>
                      <h5
                        className="space-y-2 indent-8 text-gray-500 font-extrabold text-justify text-lg "
                        key={i}
                      >
                        {children}
                      </h5>
                    </div>
                  );
                } else {
                  return <div key={i} className="h-[1.125rem] w-full"></div>;
                }
              }
              if (item.style == "normal") {
                if (children !== "") {
                  return (
                    <div key={i}>
                      <p
                        className={`space-y-2  ${item.listItem === "bullet" ? "list-item list-disc ml-14 indent-2" : "indent-8"} text-gray-500 font-medium text-justify text-lg `}
                        key={i}
                      >
                        {children}
                      </p>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={i}
                      className="h-[1.125rem] w-full"
                    ></div>
                  );
                }
              }
              if (item.style == "h4") {
                if (children !== "") {
                  return (
                    <div key={i}>
                      <h4
                        className="space-y-2 indent-8 text-gray-500  font-black text-justify text-xl "
                        key={i}
                      >
                        {children}
                      </h4>
                    </div>
                  );
                } else {
                  return <div key={i} className="h-[1.25rem] w-full"></div>;
                }
              }
              if (item.style == "h3") {
                if (children !== "") {
                  return (
                    <div key={i}>
                      <h3
                        className="space-y-2 indent-8 text-gray-500 font-black text-justify text-2xl "
                        key={i}
                      >
                        {children}
                      </h3>
                    </div>
                  );
                } else {
                  return <div key={i} className="h-[1.5rem] w-full"></div>;
                }
              }

              if (item.style == "h2") {
                if (children !== "") {
                  return (
                    <div key={i}>
                      <h2
                        className="space-y-2 indent-8 text-gray-500 font-black text-justify text-3xl "
                        key={i}
                      >
                        {children}
                      </h2>
                    </div>
                  );
                } else {
                  return <div key={i} className="h-[1.875rem] w-full"></div>;
                }
              }

              if (item.style == "h1") {
                if (children !== "") {
                  return (
                    <div key={i}>
                      <h3
                        className="space-y-2 indent-8 text-gray-500 font-black text-justify text-4xl "
                        key={i}
                      >
                        {children}
                      </h3>
                    </div>
                  );
                }else {
                  return <div key={i} className="h-[2.25rem] w-full"></div>;
                }
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Parrafos;
