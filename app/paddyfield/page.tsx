import React from "react";
import { getAllData } from "@/client";
import PaddyFieldPosts from "@/components/portalPaddyField/PaddyFieldPosts";
import PaddyFieldList from "@/components/portalPaddyField/PaddyFieldList";

const PaddyFieldPage = async () => {
  const paddyFields = await getAllData("portalPaddyField");
  
  return (
    <div className="w-full bg-gradient-to-b from-white via-green-300 to-white flex flex-col items-center">
      <h1 className="text-5xl font-semibold text-green-800">
        Portal Paddy Field
      </h1>
      <div className="w-full max-w-6xl mx-auto flex flex-row mt-8">
        <PaddyFieldPosts paddyFieldPosts={paddyFields}/>
        <PaddyFieldList paddyFieldPosts={paddyFields}/>
     

      </div>
    </div>
  );
};

export default PaddyFieldPage;
