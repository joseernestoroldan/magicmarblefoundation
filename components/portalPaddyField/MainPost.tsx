import { QueryType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const MainPost = ({ paddyFields }: { paddyFields: QueryType[] }) => {
  const mainArticle = paddyFields[0];
  const { _id, mainImage, title, description, hotSpot } = mainArticle;
  const x = (hotSpot?.x ?? 0.5) * 100;
  const y = (hotSpot?.y ?? 0.5) * 100;
  return (
    <div className="w-full flex flex-col space-y-8">
      {_id && mainImage && (
        <Link href={`paddyfield/${_id}`}>
          <div className="bg-gray-400 h-[50vh] w-full rounded-[10px] relative overflow-hidden hover:brightness-75 cursor-pointer">
            <Image
              src={mainImage}
              className="object-cover"
              alt="portal paddy field"
              fill
              style={{ objectPosition: `${x}% ${y}%` }}
            />
            <div className="h-[20vh] w-[300px] rounded-tr-[5px] sm:w-[500px] bottom-0 bg-green-950 absolute bg-opacity-60 flex flex-col space-y-4 justify-center items-center p-4">
              <h2 className="w-[300px] text-white text-xl font-bold">
                {title}
              </h2>
              <p className="w-[300px] text-white text-base">{description}</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default MainPost;
