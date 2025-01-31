import { QueryType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ReelPosts = ({ paddyFieldPosts }: { paddyFieldPosts: QueryType[] }) => {
  const [
    mainArticle,
    firstArticle,
    secondArticle,
    thridArticle,
    fourthArticle,
    ...rest
  ] = paddyFieldPosts;

  return (
    <div className="w-full h-auto flex flex-wrap justify-center gap-8">
      <Post article={firstArticle} />
      <Post article={secondArticle} />
      <Post article={thridArticle} />
      <Post article={fourthArticle} />
    </div>
  );
};

export default ReelPosts;

const Post = ({ article }: { article: QueryType }) => {
  return (
    <Link href={`paddyfield/${article._id}`}>
      <div className="w-[300px] sm:w-[400px] h-[570px] rounded-[10px] flex flex-col items-center hover:brightness-75 bg-black bg-opacity-10 hover:bg-opacity-20 cursor-pointer mt-8">
        {article.mainImage && (
          <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] relative rounded-[5px] overflow-hidden">
            <Image
              src={article.mainImage}
              alt="portal paddy field"
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className=" w-[300px] sm:w-[400px] flex flex-col space-y-2">
          <h2 className="z-10 w-[300px] sm:w-[400px] text-green-950 text-xl text-center font-semibold">
            {article.title}
          </h2>
          <p className="w-[300px] sm:w-[400px] text-green-950 text-base text-opacity-85 px-4">
            {article.description}
          </p>
        </div>
      </div>
    </Link>
  );
};
