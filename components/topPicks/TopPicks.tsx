import React from "react";
import { getAllByTop } from "@/client";
import TopPicksCarousell from "./TopPicksCarousell";

const TopPicks = async () => {
    const allTopPicks = await getAllByTop()
    console.log(allTopPicks)
    console.log("here")
  return (
    <div className="max-w-6xl w-full mx-auto flex flex-col items-center pt-8">
        <h2 className="text-green-950 text-2xl font-semibold">Top Editors&apos; Picks.</h2>
        
        <div className="w-full h-[400px] flex flex-row justify-between items-center pt-8">
            <TopPicksCarousell topPicks={allTopPicks}/>

        </div>

    </div>
  )
}

export default TopPicks