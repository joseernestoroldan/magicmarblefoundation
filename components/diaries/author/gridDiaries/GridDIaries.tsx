import { getAllData } from "@/client";
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
            textSize="text-5xl"
            center="flex justify-center "
          />
        </div>

        <Container>
          <LayoutY>
            <div className="flex flex-col items-center justify-center w-full space-y-8">
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
      </EnterSection>
    </HeadingCenterAnimation>
  );
};

export default GridDIaries;
