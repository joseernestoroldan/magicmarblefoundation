import React from "react";
import { getOne } from "@/client";
import Photo from "@/components/photo/photo";
import Parrafos from "@/components/parrafos/Parrafos";
import Container from "@/components/layouts/container/Container";
import Heading from "@/components/headings/heading";
import HeadingCenterAnimation from "@/components/headingsAnimations/HeadingCenterAnimation";
import Author from "@/components/diaries/author/Author";

const DiaryPage = async ({
  params: { id: _Id },
}: {
  params: { id: string };
}) => {
  const data = await getOne(_Id);


  return (
    <HeadingCenterAnimation>
      <Container>
        <div className="flex flex-col justify-center w-full h-auto">
          <div className="flex flex-col space-y-4 md:space-y-10 justify-center items-center pt-4 md:pt-20">
            <Heading
              title={data[0].title}
              color="text-cyan-500"
              shadow=""
              textSize="text-2xl md:text-4xl"
              center="flex items-center justify-center"
            />
            {data[0].mainImage !== null && (
              <Photo
                width="w-full"
                height="h-[250px] md:h-[500px] lg:h-[700px]"
                alt=""
                borderRadius=""
                src={data[0].mainImage}
                objectFit="object-contain"
              />
            )}
            {data[0].contenido !== null && <Parrafos data={data} />}
          </div>
          <div className="flex flex-row justify-center md:justify-end">
            {data[0].author !== null && <Author data={data} />}
          </div>
        </div>
      </Container>
    </HeadingCenterAnimation>
  );
};

export default DiaryPage;
