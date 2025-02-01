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
      <h1 className="text-3xl font-semibold text-green-800">Paddy Field</h1>
      <div className="w-full max-w-7xl mx-auto flex flex-col mt-8">
        <div className="w-full max-w-7xl flex flex-col md:flex-row">
          <div className="flex flex-col w-full md:w-2/3">
            <MainPost paddyFields={paddyFields} />
            <ReelPosts paddyFieldPosts={paddyFields} />
            <div className="w-full text-center py-8 text-green-950 underline text-xl font-bold">
              <Link href={"/paddyfield/morearticles"}>Read More Articles</Link>
            </div>
            <Recipies />
            <div className="w-full text-center py-1 text-green-950 underline text-xl font-bold">
              <Link href={"/paddyfield/morerecipies"}>Get More Recipies</Link>
            </div>
            <TopPicks />
            
          </div>

          <PaddyFieldList paddyFieldPosts={paddyFields} />
        </div>
      </div>
    </div>
  );
};

export default PaddyFieldPage;
