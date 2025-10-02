import { QueryType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ReelPosts = ({ paddyFieldPosts }: { paddyFieldPosts: QueryType[] }) => {
  const [, firstArticle, secondArticle, thridArticle, fourthArticle] =
    paddyFieldPosts;

  return (
    <div className="w-full flex flex-wrap justify-center gap-20 mt-8">
      {[firstArticle, secondArticle, thridArticle, fourthArticle].map(
        (article) => article && <Post key={article._id} article={article} />
      )}
    </div>
  );
};

export default ReelPosts;

const Post = ({ article }: { article: QueryType }) => (
  <Link href={`paddyfield/${article._id}`}>
    <div className="w-[300px] sm:w-[360px] overflow-hidden shadow-lg rounded-[5px] bg-white/60 hover:scale-105 transition-transform duration-300">
      {article.mainImage && (
        <div className="relative w-full h-[300px] sm:h-[360px]">
          <Image
            src={article.mainImage}
            alt="portal paddy field"
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-green-900 text-lg font-bold text-center line-clamp-2">
          {article.title}
        </h2>
        <p className="text-green-900 text-opacity-85 text-sm text-center line-clamp-3">
          {article.description}
        </p>
      </div>
    </div>
  </Link>
);
