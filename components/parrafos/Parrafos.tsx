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
              const children = item.children[0].text;

              if (item.style === "h5") {
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
              }
              if (item.style == "normal") {
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
              }
              if (item.style == "h4") {
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
              }
              if (item.style == "h3") {
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
              }

              if (item.style == "h2") {
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
              }

              if (item.style == "h1") {
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
              }

            })}
          </div>
        );
      })}
    </div>
  );
};

export default Parrafos;
