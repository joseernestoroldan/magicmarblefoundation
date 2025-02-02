import { Block } from "@/types/types";

const Paragraphs = ({ contenido, sizeText, mdSizeText, indent }: { contenido: Block[], sizeText?: string, mdSizeText?: string, indent?:string }) => {
  return (
    <div className="">
      {contenido.map((item: Block, index: number) => {
        const unTrimmedText = item.children[0].text;
        const text = unTrimmedText.trim();
        const style = item.style;
        const textSize = decideSize(style, sizeText, mdSizeText, indent);
        console.log(textSize)

        if (text === "##") {
          return <div key={index} className="h-[16px] w-full"></div>;
        }
        if (text === "#") {
          return <div key={index} className="h-[5px] w-full"></div>;
        }
        if ((text !== "##") && (text !== "#")) {
          return (
            <div key={index}>
              <div
                className={`space-y-2 text-gray-500 font-semibold text-justify text-wrap w-full ${textSize}`}
              >
                {text}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Paragraphs;

const decideSize = (style: string, sizeText?: string, mdSizeText?: string, indentText?: string) => {

  const size = sizeText || "text-[16px]"
  const mdSize = mdSizeText || "text-[18px]"
  const indent = indentText || "indent-0"
  switch (style) {
    case "h6":
      return "text-[22px] leading-[44px]";
    case "h5":
      return "text-[26px] leading-[52px]";
    case "h4":
      return "text-[30px] leading-[60px]";
    case "h3":
      return "text-[34px] leading-[68px]";
    case "h2":
      return "text-[38px] leading-[86px]";
    case "h1":
      return "text-[42px] leading-[84px]";
    case "normal":
      return `${size} leading-[20px] ${mdSize} ${indent}`;
    default:
      return "text-[20px] leading-[20px]";
  }
};
