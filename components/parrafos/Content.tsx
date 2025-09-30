import Link from "next/link";

type BlockContent = {
  _key: string;
  _type: string;
  children: Children;
  markDefs: MarkDef[];
  style: Style;
  listItem: string | null;
  level: number;
};

type MarkDef = {
  _key: string;
  _type: string;
  href: string;
};

type Children = Child[];

type Child = {
  _key: string;
  _type: string;
  marks: string[];
  text: string;
};

type Style = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal" | "blockquote";

const Content = ({ contenido }: { contenido: BlockContent[] }) => {
  console.log("++++++++++++++++++++++++++++++++++");
  console.log(contenido);
  let list_number
  return (
    <div className="w-full">
      {contenido.map((paragraph: BlockContent, index: number) => {
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
              className={`text-gray-500 font-medium text-wrap ${isH1 && "text-6xl"} ${isH2 && "text-5xl"} ${isH3 && "text-4xl"} ${isH4 && "text-3xl"} ${isH5 && "text-2xl"} ${isH6 && "text-xl"} ${isQuote && "text-base"} ${isNormal && "text-lg"} ${isBullet && "list-item list-disc"} ${isNumbered && "list-item list-decimal"}`}>
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
                    <Link key={item._key} className="text-cyan-500" href={paragraph.markDefs[0].href}>
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
export default Content;
