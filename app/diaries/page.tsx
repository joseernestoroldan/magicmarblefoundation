import { getAllData } from "@/client";
import GridDIaries from "@/components/diaries/author/gridDiaries/GridDIaries";
import Donations from "@/components/home/donations/Donations";
import LayoutY from "@/components/layouts/layoutY/LayoutY";

const DiariesPage = async () => {
   const diaries = await getAllData("dairies");

  return (
    <LayoutY>
      <GridDIaries diaries={diaries} />
      <Donations/>
    </LayoutY>
  );
};

export default DiariesPage;
