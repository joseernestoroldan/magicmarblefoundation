import React from "react";
import { getAllByTop } from "@/client";
import TopPicksCarousell from "./TopPicksCarousell";

const TopPicks = async () => {
    const allTopPicks = await getAllByTop()
  return (
    <div className="max-w-7xl w-full mx-auto flex flex-col items-center pt-8 bg-gray-500/10 rounded-[5px]">
        <h2 className="text-gray-500 text-2xl font-bold">Editors&apos; Picks.</h2>
        
        <div className="w-full h-[400px] flex flex-row justify-between items-center pt-8">
            <TopPicksCarousell topPicks={allTopPicks}/>

        </div>

    </div>
  )
}

export default TopPicks