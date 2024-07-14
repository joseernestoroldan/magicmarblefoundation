import React from "react";
import { getOne } from "@/client";
import Photo from "@/components/photo/photo";
import Parrafos from "@/components/parrafos/Parrafos";
import Container from "@/components/layouts/container/Container";
import Heading from "@/components/headings/heading";
import HeadingCenterAnimation from "@/components/headingsAnimations/HeadingCenterAnimation";
import Author from "@/components/diaries/author/Author";
import { Date } from "@/utils/date";
import Dates from "@/components/date/Date";
import { Metadata, ResolvingMetadata } from "next";



export async function generateMetadata({ params: { id: _Id },}:{  params: { id: string }}, parent: ResolvingMetadata
): Promise<Metadata> {

  const data = await getOne(_Id);
  const previousImages = (await parent).openGraph?.images || []
  console.log("esto", data[0].mainImage)
  return{
    title: data[0].title,
    openGraph: {
      title: data[0].title,
      description: data[0].description,
      images:[data[0].mainImage, ...previousImages],

      locale: 'en_US',
      type: 'website',
    },
  }

}


const DiaryPage = async ({ params: { id: _Id },}:{  params: { id: string }}) => {
  let textSize;
  const data = await getOne(_Id);
  const dateString = data[0].publishedAt;
  const myDate = Date(dateString);

  console.log(data[0].title.length)
  data[0].title.length > 30 ? textSize = "text-3xl" : textSize = "text-4xl" 
    
  return (
    <HeadingCenterAnimation>
      <Container>
        <div className="flex flex-col justify-center w-full h-auto">
          <div className="flex flex-col space-y-4 md:space-y-10 justify-center items-center pt-4 md:pt-20">
            <Heading
              title={data[0].title}
              color="text-cyan-500"
              shadow=""
              textSize={`text-2xl md:${textSize}`}
              center="flex items-center justify-center"
            />

            {data[0].publishedAt !== null && (
              <div className="w-full flex justify-end items-center">
                <Dates
                  hour={myDate.hour}
                  day={myDate.day}
                  month={myDate.month}
                  year={myDate.year}
                  monthName={myDate.monthName}
                />
              </div>
            )}

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
