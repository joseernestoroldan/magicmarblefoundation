import { getAllData } from "@/client";
import EnterElement from "@/components/animations/enterElement/EnterElement";
import EnterSection from "@/components/animations/enterSection/EnterSection";
import Heading from "@/components/headings/heading";
import HeadingCenterAnimation from "@/components/headingsAnimations/HeadingCenterAnimation";
import Container from "@/components/layouts/container/Container";
import LayoutY from "@/components/layouts/layoutY/LayoutY";
import Diary from "@/components/magicDiaries/Diary";
import React from "react";

const GridDIaries = async () => {
  const diaries = await getAllData("dairies");

  return (
    <HeadingCenterAnimation>
      <EnterSection>
        <div className="pb-12">
          <Heading
            title="Magic Diaries"
            color="text-cyan-500"
            shadow=""
            textSize="text-4xl"
            center="flex justify-center "
          />
        </div>
        <EnterElement>
          <Container>
            <LayoutY>
              <div className="flex flex-col flex-wrap md:flex-row items-center justify-center w-full space-y-8 md:space-y-0 max-w-5xl space-x-0 md:space-x-4">
                {diaries.map((diary: any) => (
                  <Diary
                    _id={diary._id}
                    title={diary.title}
                    description={diary.description}
                    mainImage={diary.mainImage}
                    key={diary._id}
                  ></Diary>
                ))}
              </div>
            </LayoutY>
          </Container>
        </EnterElement>
      </EnterSection>
    </HeadingCenterAnimation>
  );
};

export default GridDIaries;
