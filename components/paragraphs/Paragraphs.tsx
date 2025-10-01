import { Block } from "@/types/types";
import Link from "next/link";

const Paragraphs = ({ contenido }: { contenido: Block[] }) => {
  // Agrupar bloques contiguos según listItem
  const groupBlocks = (blocks: Block[]) => {
    const groups: { type: string | null; items: Block[] }[] = [];
    let currentGroup: { type: string | null; items: Block[] } | null = null;

    blocks.forEach((block) => {
      const listType = block.listItem || null;

      if (!currentGroup || currentGroup.type !== listType) {
        currentGroup = { type: listType, items: [] };
        groups.push(currentGroup);
      }
      currentGroup.items.push(block);
    });

    return groups;
  };

  const groups = groupBlocks(contenido);

  return (
    <div className="w-full pt-8">
      {groups.map((group, groupIndex) => {
        const isBullet = group.type === "bullet";
        const isNumbered = group.type === "number";

        if (isBullet) {
          return (
            <ul key={groupIndex} className="list-disc pl-6 text-gray-500 font-medium">
              {group.items.map((paragraph) => {
                if (paragraph._type !== "block") return null;

                // Ignorar bloques con texto vacío (como en tu código)
                if (
                  paragraph.children.length === 1 &&
                  paragraph.children[0].text.length === 0
                ) {
                  return <li key={paragraph._key} className="text-transparent">a</li>;
                }

                return (
                  <li key={paragraph._key}>
                    {paragraph.children.map((item) => {
                      const marks = item.marks;
                      const isBold = marks.includes("strong");
                      const isItalic = marks.includes("em");
                      const isUnderline = marks.includes("underline");
                      const isStriked = marks.includes("strike-through");

                      const reference =
                        paragraph.markDefs.length > 0 ? paragraph.markDefs[0]._key : "";

                      const isLink = marks.includes(reference);

                      if (!isLink) {
                        return (
                          <span
                            key={item._key}
                            className={`${isBold ? "font-bold" : ""} ${isItalic ? "italic" : ""} ${isUnderline ? "underline" : ""} ${isStriked ? "line-through" : ""}`}
                          >
                            {item.text}
                          </span>
                        );
                      } else {
                        return (
                          <Link
                            key={item._key}
                            className="text-cyan-500 break-all"
                            href={paragraph.markDefs[0].href}
                          >
                            {paragraph.markDefs[0].href}
                          </Link>
                        );
                      }
                    })}
                  </li>
                );
              })}
            </ul>
          );
        } else if (isNumbered) {
          return (
            <ol key={groupIndex} className="list-decimal pl-6 text-gray-500 font-medium">
              {group.items.map((paragraph) => {
                if (paragraph._type !== "block") return null;

                if (
                  paragraph.children.length === 1 &&
                  paragraph.children[0].text.length === 0
                ) {
                  return <li key={paragraph._key} className="text-transparent">a</li>;
                }

                return (
                  <li key={paragraph._key}>
                    {paragraph.children.map((item) => {
                      const marks = item.marks;
                      const isBold = marks.includes("strong");
                      const isItalic = marks.includes("em");
                      const isUnderline = marks.includes("underline");
                      const isStriked = marks.includes("strike-through");

                      const reference =
                        paragraph.markDefs.length > 0 ? paragraph.markDefs[0]._key : "";

                      const isLink = marks.includes(reference);

                      if (!isLink) {
                        return (
                          <span
                            key={item._key}
                            className={`${isBold ? "font-bold" : ""} ${isItalic ? "italic" : ""} ${isUnderline ? "underline" : ""} ${isStriked ? "line-through" : ""}`}
                          >
                            {item.text}
                          </span>
                        );
                      } else {
                        return (
                          <Link
                            key={item._key}
                            className="text-cyan-500 break-all"
                            href={paragraph.markDefs[0].href}
                          >
                            {paragraph.markDefs[0].href}
                          </Link>
                        );
                      }
                    })}
                  </li>
                );
              })}
            </ol>
          );
        } else {
          // No es lista, renderizamos bloques normales
          return group.items.map((paragraph) => {
            if (paragraph._type !== "block") return null;

            // Manejo estilos de encabezados y otros estilos como antes
            let style = paragraph.style;
            let isH1 = style === "h1";
            let isH2 = style === "h2";
            let isH3 = style === "h3";
            let isH4 = style === "h4";
            let isH5 = style === "h5";
            let isH6 = style === "h6";
            let isQuote = style === "blockquote";
            let isNormal = style === "normal";

            if (
              paragraph.children.length === 1 &&
              paragraph.children[0].text.length === 0
            ) {
              return (
                <div key={paragraph._key} className="text-transparent">
                  a
                </div>
              );
            }

            return (
              <div
                key={paragraph._key}
                className={`text-gray-500 font-medium text-wrap 
                ${isH1 ? "text-4xl pb-8" : ""}
                ${isH2 ? "text-3xl pb-7" : ""}
                ${isH3 ? "text-2xl pb-6" : ""}
                ${isH4 ? "text-xl pb-5" : ""}
                ${isH5 ? "text-lg pb-4" : ""}
                ${isH6 ? "text-base" : ""}
                ${isQuote ? "text-base italic" : ""}
                ${isNormal ? "text-lg" : ""}
                `}
              >
                {paragraph.children.map((item) => {
                  const marks = item.marks;
                  const isBold = marks.includes("strong");
                  const isItalic = marks.includes("em");
                  const isUnderline = marks.includes("underline");
                  const isStriked = marks.includes("strike-through");

                  const reference =
                    paragraph.markDefs.length > 0 ? paragraph.markDefs[0]._key : "";

                  const isLink = marks.includes(reference);

                  if (!isLink) {
                    return (
                      <span
                        key={item._key}
                        className={`${isBold ? "font-bold" : ""} ${isItalic ? "italic" : ""} ${isUnderline ? "underline" : ""} ${isStriked ? "line-through" : ""}`}
                      >
                        {item.text}
                      </span>
                    );
                  } else {
                    return (
                      <Link
                        key={item._key}
                        className="text-cyan-500 break-all"
                        href={paragraph.markDefs[0].href}
                      >
                        {paragraph.markDefs[0].href}
                      </Link>
                    );
                  }
                })}
              </div>
            );
          });
        }
      })}
    </div>
  );
};

export default Paragraphs;
