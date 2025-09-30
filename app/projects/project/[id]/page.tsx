import { getOne } from "@/client";
import Paragraphs from "@/components/paragraphs/Paragraphs";
import Heading from "@/components/headings/heading";
import HeadingCenterAnimation from "@/components/headingsAnimations/HeadingCenterAnimation";
import Image from "next/image";
import { QueryType } from "@/types/types";

const page = async ({ params: { id: _Id } }: { params: { id: string } }) => {
  const query: QueryType[] | null = await getOne(_Id);
  if (!query) return null;
  const [data] = query;
  const { mainImage, title, contenido } = data;

  return (
    <HeadingCenterAnimation>
      <div className="flex flex-col lg:flex-row w-full h-auto justify-around px-6">
        <div className="flex flex-col items-center px-4">
          {mainImage && (
            <div className="w-full lg:w-[500px] xl:w-[700px] h-[300px] lg:h-[600px] relative overflow-hidden">
              <Image
                className="object-contain object-top"
                src={mainImage}
                alt="magic marble foundation"
                fill
              />
            </div>
          )}
        </div>
        <div className="pt-4 md:pt-10 px-10 border-x md:border-l  border-gray-400 border-solid">
          <Heading
            title={title}
            color="text-cyan-500"
            shadow=""
            textSize="text-2xl md:text-3xl lg:text-3xl"
            center="flex items-center justify-center"
          />
          {contenido && <Paragraphs contenido={contenido} />}
        </div>
      </div>
    </HeadingCenterAnimation>
  );
};

export default page;
