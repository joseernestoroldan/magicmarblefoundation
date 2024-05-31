import GridDIaries from "@/components/diaries/author/gridDiaries/GridDIaries";
import Donations from "@/components/home/donations/Donations";
import LayoutY from "@/components/layouts/layoutY/LayoutY";

const DiariesPage = async () => {
  return (
    <LayoutY>
      <GridDIaries />
      <Donations/>
    </LayoutY>
  );
};

export default DiariesPage;
