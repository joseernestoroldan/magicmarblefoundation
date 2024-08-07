import { getAllData } from "@/client";
import GridDIaries from "@/components/diaries/author/gridDiaries/GridDIaries";
import Donations from "@/components/home/donations/Donations";
import LayoutY from "@/components/layouts/layoutY/LayoutY";

const DiariesPage = async () => {
   const diaries = await getAllData("dairies");

  return (
    <LayoutY>
      <div className="w-full max-w-5xl mx-auto min-h-[75vh] flex flex-col items-center justify-start">
        <GridDIaries diaries={diaries} />
      </div>
      
      <Donations/>
    </LayoutY>
  );
};

export default DiariesPage;
