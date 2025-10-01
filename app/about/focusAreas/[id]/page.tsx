import { getOne } from "@/client";
import Heading from "@/components/headings/heading";
import HeadingCenterAnimation from "@/components/headingsAnimations/HeadingCenterAnimation";
import Container from "@/components/layouts/container/Container";
import Paragraphs from "@/components/paragraphs/Paragraphs";
import { QueryType } from "@/types/types";
import Image from "next/image";


const FocusArea = async ({
  params: { id: _Id },
}: {
  params: { id: string };
}) => {
  const [data]: QueryType[] = await getOne(_Id);
  const{title, mainImage, contenido} = data

  return (
    <HeadingCenterAnimation>
      <Container>
        <div className="flex flex-col justify-center w-full h-auto pt-8 lg:pt-0">
          <div className="flex flex-col space-y-1 justify-center items-center">
            <Heading
              title={title}
              color="text-cyan-500"
              shadow=""
              textSize="text-2xl lg:text-4xl"
              center="flex items-center justify-center"
            />
            {mainImage && (
              <div
                className={`w-full h-[400px] md:h-[500px] relative overflow-hidden rounded-[5px]`}
              >
                <Image
                  className={`object-cover object-center rounded-2xl`}
                  src={mainImage}
                  fill
                  alt=""
                  priority={true}
                />
              </div>
            )}
            {contenido !== null && <Paragraphs contenido={contenido} />}
          </div>
        </div>
      </Container>
    </HeadingCenterAnimation>
  );
};

export default FocusArea;
