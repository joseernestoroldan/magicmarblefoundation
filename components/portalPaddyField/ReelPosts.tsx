import Image from "next/image";
import Link from "next/link";
import React from "react";

const ReelPosts = ({ paddyFieldPosts }: any) => {
 
  return (
    <div className="w-full h-[500px]  flex justify-between">
      <Link href={`paddyfield/${paddyFieldPosts[1]._id}`}>
        <div className="w-300px flex flex-col items-center space-y-4 hover:brightness-75 cursor-pointer">
          <div className="w-[300px] h-[300px] bg-gray-600 mt-8 relative rounded-[5px] overflow-hidden">
            <Image
              src={paddyFieldPosts[1].mainImage}
              alt="portal paddy field"
              fill
              className="object-cover"
            />
          </div>
          <div className=" w-300px flex flex-col space-y-4">
            <h2 className="z-10 w-[300px] text-green-950 text-xl font-medium">
              {paddyFieldPosts[1].title}
            </h2>
            <p className="w-[300px] text-green-950 text-base text-opacity-85">
              {paddyFieldPosts[1].description}
            </p>
          </div>
        </div>
      </Link>

      <Link href={`paddyfield/${paddyFieldPosts[2]._id}`}>
        <div className="w-300px flex flex-col items-center space-y-4 hover:brightness-75 cursor-pointer">
          <div className="w-[300px] h-[300px] bg-gray-600 mt-8 relative rounded-[5px] overflow-hidden">
            <Image
              src={paddyFieldPosts[2].mainImage}
              alt="portal paddy field"
              fill
              className="object-cover"
            />
          </div>
          <div className=" w-300px flex flex-col space-y-4">
            <h2 className="z-10 w-[300px] text-green-950 text-xl font-medium">
              {paddyFieldPosts[2].title}
            </h2>
            <p className="w-[300px] text-green-950 text-base text-opacity-85">
              {paddyFieldPosts[2].description}
            </p>
          </div>
        </div>
      </Link>

      <Link href={`paddyfield/${paddyFieldPosts[3]._id}`}>
        <div className="w-300px flex flex-col items-center space-y-4 hover:brightness-75 cursor-pointer">
          <div className="w-[300px] h-[300px] bg-gray-600 mt-8 relative rounded-[5px] overflow-hidden">
            <Image
              src={paddyFieldPosts[3].mainImage}
              alt="portal paddy field"
              fill
              className="object-cover"
            />
          </div>
          <div className=" w-300px flex flex-col space-y-4">
            <h2 className="z-10 w-[300px] text-green-950 text-xl font-medium">
              {paddyFieldPosts[3].title}
            </h2>
            <p className="w-[300px] text-green-950 text-base text-opacity-85">
              {paddyFieldPosts[3].description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ReelPosts;
