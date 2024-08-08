import { CardTeamProps } from "@/types/types";
import Image from "next/image";

const CardTeam = ({ image, name, post, email, body }: CardTeamProps) => {
  return (
    <div className="flex flex-col md:flex-row w-full md:w-1/2 p-4">
      <div className="basis-1 md:basis-2/5  flex flex-col justify-start items-center rounded">
        <div
          className={`w-[75px] md:w-[100px] lg:w-[150px] h-[75px] md:h-[100px] lg:h-[150px] relative overflow-hidden rounded-[50%]`}
        >
          <Image
            className={`object-cover object-top rounded-2xl`}
            src={image || "/no-profile.webp"}
            fill
            alt={name}
            priority={true}
          />
        </div>
      </div>
      <div className="basis-1 md:basis-3/5 flex flex-col justify-start items-center ">
        <h1 className="text-black text-2xl text-center md:text-left font-semibold py-2 w-full capitalize">
          {name}
        </h1>
        <h2 className="text-center md:text-left w-full capitalize">{post}</h2>
        <p className="text-black text-lg font-medium py-2 text-center md:text-left w-full">
          {email}
        </p>
        <p className="py-2 text-justify w-full">{body}</p>
      </div>
    </div>
  );
};

export default CardTeam;
