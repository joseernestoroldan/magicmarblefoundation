import { getAllData } from "@/client";
import PaddyFieldList from "@/components/portalPaddyField/PaddyFieldList";
import MainPost from "@/components/portalPaddyField/MainPost";
import ReelPosts from "@/components/portalPaddyField/ReelPosts";
import Recipies from "@/components/portalPaddyField/Recipies";
import Link from "next/link";
import TopPicks from "@/components/topPicks/TopPicks";
import { QueryType } from "@/types/types";


const PaddyFieldPage = async () => {
  const paddyFields: QueryType[] = await getAllData("portalPaddyField");
 
  return (
    <div className="w-full bg-gradient-to-b from-white via-green-300 to-white flex flex-col items-center">
      <h1 className="text-3xl font-semibold text-green-800">
        Paddy Field
      </h1>
      <div className="w-full max-w-6xl mx-auto flex flex-col mt-8">
        <div className="w-full max-w-6xl flex flex-col md:flex-row">
          <MainPost paddyFields={paddyFields} />

          <PaddyFieldList paddyFieldPosts={paddyFields} />
        </div>

        <ReelPosts paddyFieldPosts={paddyFields} />

        <div className="w-full py-8 text-green-950 underline text-lg font-medium">
          <Link href={"/paddyfield/morearticles"}>Read More Articles</Link>
        </div>

        <Recipies />
        <div className="w-full py-1 text-green-950 underline text-lg font-medium">
          <Link href={"/paddyfield/morerecipies"}>Get More Recipies</Link>
        </div>

        <TopPicks/>
      </div>
    </div>
  );
};

export default PaddyFieldPage;
