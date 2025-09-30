import { Block } from "@/types/types";
import Link from "next/link";

const Paragraphs = ({ contenido }: { contenido: Block[] }) => {
  return (
    <div className="w-full">
      {contenido.map((paragraph: Block, index: number) => {
        let spanNumber = paragraph.children.length;
        let style = paragraph.style;
        let isH1 = style === "h1";
        let isH2 = style === "h2";
        let isH3 = style === "h3";
        let isH4 = style === "h4";
        let isH5 = style === "h5";
        let isH6 = style === "h6";
        let isQuote = style === "blockquote";
        let isNormal = style === "normal";

        let isBullet = paragraph.listItem === "bullet";
        let isNumbered = paragraph.listItem === "number";

        if (paragraph._type === "block") {
          if (spanNumber === 1 && paragraph.children[0].text.length === 0) {
            return (
              <div key={index} className="text-transparent">
                a
              </div>
            );
          }
          let children = paragraph.children;

          return (
            <div
              key={index}
              className={`text-gray-500 font-medium text-wrap ${isH1 && "text-4xl pb-8"} ${isH2 && "text-3xl pb-7"} ${isH3 && "text-2xl pb-6"} ${isH4 && "text-xl pb-5"} ${isH5 && "text-lg pb-4"} ${isH6 && "text-base"} ${isQuote && "text-base"} ${isNormal && "text-lg"} ${isBullet && "list-item list-disc"} ${isNumbered && "list-item list-decimal"}`}>
              {children.map((item, index: number) => {
                let marks = item.marks;
                let isBold = marks.includes("strong");
                let isItalic = marks.includes("em");
                let isUnderline = marks.includes("underline");
                let isStriked = marks.includes("strike-through");

                let reference =
                  paragraph.markDefs.length > 0
                    ? paragraph.markDefs[0]._key
                    : "";

                let isLink = item.marks.includes(reference);

                if (!isLink) {
                  return (
                    <span
                      key={item._key}
                      className={`${isBold && "font-bold"} ${isItalic && "italic"} ${isUnderline && "underline"} ${isStriked && "line-through"}`}>
                      {item.text}
                    </span>
                  );
                } else {
                  return (
                    <Link
                      key={item._key}
                      className="text-cyan-500 break-all"
                      href={paragraph.markDefs[0].href}>
                      {paragraph.markDefs[0].href}
                    </Link>
                  );
                }
              })}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};
export default Paragraphs;

// import { Block } from "@/types/types";

// const Paragraphs = ({ contenido, sizeText, mdSizeText, indent }: { contenido: Block[], sizeText?: string, mdSizeText?: string, indent?:string }) => {
//   let numberParagraph: number = 0
//   return (
//     <div className="">
//       {contenido.map((item: Block, index: number) => {
//         const unTrimmedText = item.children[0].text;
//         const text = unTrimmedText.trim();
//         const style = item.style;
//         const textSize = decideSize(style, sizeText, mdSizeText, indent);
//         const isBullet: boolean = item.listItem === "bullet"
//         const isNumbered: boolean = item.listItem === "number"

//         isNumbered ? numberParagraph++ : numberParagraph

//         if (text === "##") {
//           return <div key={index} className="h-[16px] w-full"></div>;
//         }
//         if (text === "#") {
//           return <div key={index} className="h-[5px] w-full"></div>;
//         }
//         if ((text !== "##") && (text !== "#")) {
//           return (
//             <div key={index}>
//               <div
//                 className={`space-y-2 text-gray-500 font-normal text-justify text-wrap w-full ${textSize} ${isBullet ? "list-item list-disc" : ""}`}
//               >
//               {isNumbered && <span>{numberParagraph}.</span>}  {text}
//               </div>
//             </div>
//           );
//         }
//       })}
//     </div>
//   );
// };

// export default Paragraphs;

// const decideSize = (style: string, sizeText?: string, mdSizeText?: string, indentText?: string) => {

//   const size = sizeText || "text-[16px]"
//   const mdSize = mdSizeText || "text-[18px]"
//   const indent = indentText || "indent-0"
//   switch (style) {
//     case "h6":
//       return "text-[22px] leading-[44px]";
//     case "h5":
//       return "text-[26px] leading-[52px]";
//     case "h4":
//       return "text-[30px] leading-[60px]";
//     case "h3":
//       return "text-[34px] leading-[68px]";
//     case "h2":
//       return "text-[38px] leading-[86px]";
//     case "h1":
//       return "text-[42px] leading-[84px]";
//     case "normal":
//       return `${size} leading-[20px] ${mdSize} ${indent}`;
//     default:
//       return "text-[20px] leading-[20px]";
//   }
// };
