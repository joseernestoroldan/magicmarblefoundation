import { getOne } from "@/client";
import Container from "@/components/layouts/container/Container";
import Heading from "@/components/headings/heading";
import HeadingCenterAnimation from "@/components/headingsAnimations/HeadingCenterAnimation";
import Author from "@/components/diaries/author/Author";
import { Date } from "@/utils/date";
import Dates from "@/components/date/Date";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { QueryType } from "@/types/types";
import Content from "@/components/parrafos/Content";
// import Paragraphs from "@/components/parrafos/Paragraphs";

export async function generateMetadata(
  { params: { id: _Id } }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const query: QueryType[] | null = await getOne(_Id);
  if (!query) return { title: "" };
  const [data] = query;
  const { title, description, mainImage } = data;
  const previousImages = (await parent).openGraph?.images || [];

  if (description && mainImage) {
    return {
      title: title,
      openGraph: {
        title: data.title,
        description: description,
        images: [mainImage, ...previousImages],
        locale: "en_US",
        type: "website",
      },
    };
  }
  return {
    title: title,
  };
}

const DiaryPage = async ({
  params: { id: _Id },
}: {
  params: { id: string };
}) => {
  let textSize;
  const query: QueryType[] | null = await getOne(_Id);
  if (!query) return null;
  const [data] = query;
  const { _createdAt, hotSpotMain, mainImage, contenido, author } = data;

  const x = (hotSpotMain?.x ?? 0.5) * 100;
  const y = (hotSpotMain?.y ?? 0.5) * 100;

  const dateString = _createdAt;
  const myDate = Date(dateString);

  data.title.length > 30 ? (textSize = "text-3xl") : (textSize = "text-4xl");

  return (
    <HeadingCenterAnimation>
      <Container>
        <div className="flex flex-col justify-center w-full h-auto">
          <div className="flex  flex-col space-y-2 md:space-y-2 justify-center items-center pt-4 md:pt-4">
            <Heading
              title={data.title}
              color="text-cyan-500"
              shadow=""
              textSize={`text-2xl md:${textSize}`}
              center="flex items-center justify-center"
            />

            <div className="w-full">
              {data.publishedAt && (
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

              {mainImage && (
                <div
                  className={`w-[100%] h-[250px] md:h-[500px] lg:h-[600px] mx-auto relative overflow-hidden rounded-2xl bg-blue-300`}>
                  <Image
                    className={`object-cover`}
                    src={mainImage}
                    fill
                    alt="Magic Diaries Magi Diary"
                    priority={true}
                    style={{ objectPosition: `${x}% ${y}%` }}
                  />
                </div>
              )}
            </div>

            {/* {contenido && (
              <div className="w-full pt-8">
                <Paragraphs contenido={contenido} />
              </div>
            )} */}

            {contenido && <Content contenido={contenido} />}
          </div>
          <div className="w-full py-8 flex flex-row justify-center md:justify-end">
            {author && <Author data={data} />}
          </div>
        </div>
      </Container>
    </HeadingCenterAnimation>
  );
};

export default DiaryPage;
