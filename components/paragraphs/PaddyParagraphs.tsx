import React from "react";

const PaddyParagraphs = (datos: any) => {
  const data = datos.datos;
  return (
    <div className="w-full">
      {data.map((item: any, index: number) => {
        const children = item.children[0].text;
        console.log("children:", children)

        if (item.style === "h5") {
            if (children !== "") {
              return (
                <div key={index}>
                  <h5
                    className="space-y-2 indent-8 text-green-950 font-extrabold text-justify text-lg "
                    key={index}
                  >
                    {children}
                  </h5>
                </div>
              );
            } else {
              return <div key={index} className="h-[1.125rem] w-full"></div>;
            }
          }
          if (item.style == "normal") {
            if (children !== "") {
              return (
                <div key={index}>
                  <p
                    className={`space-y-2  ${item.listItem === "bullet" ? "list-item list-disc ml-14 indent-2" : "indent-8"} text-green-950 font-medium text-justify text-lg `}
                    key={index}
                  >
                    {children}
                  </p>
                </div>
              );
            } else {
              return (
                <div
                  key={index}
                  className="h-[1.125rem] w-full"
                ></div>
              );
            }
          }
          if (item.style == "h4") {
            if (children !== "") {
              return (
                <div key={index}>
                  <h4
                    className="space-y-2 indent-8 text-green-950  font-black text-justify text-xl "
                    key={index}
                  >
                    {children}
                  </h4>
                </div>
              );
            } else {
              return <div key={index} className="h-[1.25rem] w-full"></div>;
            }
          }
          if (item.style == "h3") {
            if (children !== "") {
              return (
                <div key={index}>
                  <h3
                    className="space-y-2 indent-8 text-green-950 font-black text-justify text-2xl "
                    key={index}
                  >
                    {children}
                  </h3>
                </div>
              );
            } else {
              return <div key={index} className="h-[1.5rem] w-full"></div>;
            }
          }

          if (item.style == "h2") {
            if (children !== "") {
              return (
                <div key={index}>
                  <h2
                    className="space-y-2 indent-8 text-green-950 font-black text-justify text-3xl "
                    key={index}
                  >
                    {children}
                  </h2>
                </div>
              );
            } else {
              return <div key={index} className="h-[1.875rem] w-full"></div>;
            }
          }

          if (item.style == "h1") {
            if (children !== "") {
              return (
                <div key={index}>
                  <h3
                    className="space-y-2 indent-8 text-green-950 font-black text-justify text-4xl "
                    key={index}
                  >
                    {children}
                  </h3>
                </div>
              );
            }else {
              return <div key={index} className="h-[2.25rem] w-full"></div>;
            }
          }
       
      })}
    </div>
  );
};

export default PaddyParagraphs;
