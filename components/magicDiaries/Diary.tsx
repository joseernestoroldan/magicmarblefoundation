import Link from "next/link";
import Image from "next/image";
import { QueryType } from "@/types/types";

const Diary = ({ diary }: { diary: QueryType }) => {
  const { _id, mainImage, hotSpotMain, title, description } = diary;
  const x = (hotSpotMain?.x ?? 0.5) * 100;
  const y = (hotSpotMain?.y ?? 0.5) * 100;

  return (
    <Link href={`/diaries/${_id}`}>
      <div
        className={`group bg-black w-[300px] h-[auto] flex justify-around items-center rounded-2xl border-gray-300 border border-card shadow-xl relative`}
      >
        <div className="flex justify-center items-center group-hover:opacity-60 ">
          
            <div
              className={`w-[300px] h-[300px] relative overflow-hidden rounded-2xl`}
            >
              <Image
                className={`object-cover`}
                src={mainImage ?? "/no-profile.webp"}
                fill
                alt="magic marble foundation diaries"
                priority={true}
                style={{ objectPosition: `${x}% ${y}%` }}
              />
            </div>
          
        </div>
        <div className="invisible group-hover:visible bg-black bg-opacity-50 absolute z-10 bottom-0 left-0 right-0 flex flex-col justify-start space-y-2 p-6 rounded-b-2xl">
          <h2 className="text-base font-bold  text-white">{title}</h2>
          <p className="text-sm font-medium  w-full h-min text-left max-w-[500px] text-white ">
            {description
              ? description?.substring(0, 70)
              : "Magic Marble Foundation"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Diary;
