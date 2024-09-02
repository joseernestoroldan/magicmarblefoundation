
import { Date } from "@/utils/date";
import Image from "next/image";
import Dates from "../date/Date";
import Link from "next/link";

const PaddyFieldPosts = ({ paddyFieldPosts }: any) => {
  return (
    <div className="w-2/3 flex flex-col space-y-8">

      {paddyFieldPosts.map((item: any, index: number) => {
        const dateString = item._createdAt
        const myDate = Date(dateString);


        return (
          <div className="w-[90%] h-auto py-4 border-b border-gray-400 flex flex-row" key={index}>
            <div className="w-1/2 flex justify-center items-center">
              <div className="w-[70%] aspect-square relative rounded-[10px] overflow-hidden">
                <Image
                  src={item.mainImage}
                  alt="Portal Paddy Field"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-start items-center space-y-4">
            <h2 className="text-gray-500 text-2xl text-center w-full">{item.title}</h2>
            <p className=" text-gray-500 text-lg text-justify indent-6 w-[80%]">{item.description}</p>
            <Link href={`paddyfield/${item._id}`}>
            <button className="text-lg font-semibold underline text-green-500">Read More</button>
            </Link>
            
            <Dates
                    hour={myDate.hour}
                    day={myDate.day}
                    month={myDate.month}
                    year={myDate.year}
                    monthName={myDate.monthName}
                  />
            
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PaddyFieldPosts;
