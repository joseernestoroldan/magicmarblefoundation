import { getOne } from "@/client";
import Paragraphs from "@/components/parrafos/Paragraphs";
import { HotSpot, QueryType } from "@/types/types";
import Image from "next/image";

const RecipiePage = async ({
  params: { id: _Id },
}: {
  params: { id: string };
}) => {
  const query: QueryType[] | null = await getOne(_Id);
  if (!query) return null;
  const [data] = query;
  const {} = data;
  const {
    ingredients,
    instructions,
    mainImage,
    secondImage,
    thirdImage,
    fourthImage,
    hotSpotMain,
    hotSpotSecond,
    hotSpotThird,
    hotSpotFourth,
  } = data;

  return (
    <div className="w-full bg-gradient-to-b from-white via-green-300 to-white flex flex-row">
      <div className="p-12 w-2/5 flex flex-col items-center space-y-4 min-w-[300px]">
        {mainImage && <ItemGallery image={mainImage} hotSpot={hotSpotMain}/>}
        {secondImage && <ItemGallery image={secondImage} hotSpot={hotSpotSecond} />}
        {thirdImage && <ItemGallery image={thirdImage} hotSpot={hotSpotThird} />}
        {fourthImage &&  <ItemGallery image={fourthImage} hotSpot={hotSpotFourth} />}
      </div>
      <div className=" w-3/5 flex flex-col justify-start space-y-4 px-12">
        <h2 className="text-gray-500 font-bold text-2xl">Ingredients:</h2>
        {ingredients && (
          <Paragraphs
            contenido={ingredients}
            sizeText="text-[16px]"
            mdSizeText="text-[18px]"       
          />
        )}
        <h2 className="text-gray-500 font-bold text-2xl">Instructions:</h2>
        {instructions && (
          <Paragraphs
            contenido={instructions}
            sizeText="text-[16px]"
            mdSizeText="text-[18px]"
          />
        )}
      </div>
    </div>
  );
};

export default RecipiePage;

const ItemGallery = ({ image, hotSpot }: { image: string | null, hotSpot:HotSpot | null }) => {
  const x = (hotSpot?.x ?? 0.5) * 100;
  const y = (hotSpot?.y ?? 0.5) * 100;
  return (
    <div className="w-full bg-gray-600 aspect-square relative rounded-[10px] overflow-hidden">
      <Image
        src={image ?? "/no_profile.webp"}
        alt="Recipies Magic Marble Foundation"
        fill
        className="object-cover"
        style={{ objectPosition: `${x}% ${y}%` }}
      />
    </div>
  );
};
