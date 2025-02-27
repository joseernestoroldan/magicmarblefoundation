import EnterSection from "@/components/animations/enterSection/EnterSection";
import Heading from "@/components/headings/heading";
import HeadingCenterAnimation from "@/components/headingsAnimations/HeadingCenterAnimation";
import Container from "@/components/layouts/container/Container";
import LayoutY from "@/components/layouts/layoutY/LayoutY";
import Diary from "@/components/magicDiaries/Diary";
import {  QueryType } from "@/types/types";

const GridDIaries = async ({diaries}: {diaries:QueryType[]}) => {

  return (
    <HeadingCenterAnimation>
      <EnterSection>
        <div className="pb-12 flex flex-col items-center justify-start w-full">
          <Heading
            title="Magic Diaries"
            color="text-cyan-500"
            shadow=""
            textSize="text-4xl"
            center="flex justify-center "
          />
        </div>
   
         
              <div className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-center">
                {diaries.map((diary: QueryType) => (
                  <Diary key={diary._id} diary ={diary}/>
                ))}
              </div>
            

      </EnterSection>
    </HeadingCenterAnimation>
  );
};

export default GridDIaries;
