import EnterSection from "@/components/animations/enterSection/EnterSection";
import Heading from "@/components/headings/heading";
import HeadingCenterAnimation from "@/components/headingsAnimations/HeadingCenterAnimation";
import Container from "@/components/layouts/container/Container";
import LayoutY from "@/components/layouts/layoutY/LayoutY";
import Diary from "@/components/magicDiaries/Diary";
import React from "react";
import { GridDIariesProps } from "@/types/types";


const GridDIaries = async ({diaries}: GridDIariesProps) => {

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
   
          <Container>
            <LayoutY>
              <div className="flex flex-col flex-wrap md:flex-row items-center justify-center w-full space-y-8 md:space-y-0 max-w-5xl space-x-0">
                {diaries.map((diary: any) => (
                  <Diary
                    _id={diary._id}
                    title={diary.title}
                    description={diary.description}
                    mainImage={diary.mainImage}
                    key={diary._id}
                    crop={diary.crop}
                  ></Diary>
                ))}
              </div>
            </LayoutY>
          </Container>

      </EnterSection>
    </HeadingCenterAnimation>
  );
};

export default GridDIaries;
