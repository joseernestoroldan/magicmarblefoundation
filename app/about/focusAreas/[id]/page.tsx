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
        <div className="flex flex-col justify-center w-full h-auto">
          <div className="flex flex-col space-y-10 justify-center items-center lg:pt-20">
            <Heading
              title={title}
              color="text-cyan-500"
              shadow=""
              textSize="text-4xl"
              center="flex items-center justify-center"
            />
            {mainImage && (
              <div
                className={`w-full h-[200px] md:h-[500px] lg:h-[700px] relative overflow-hidden rounded-2xl`}
              >
                <Image
                  className={`object-contain object-top rounded-2xl`}
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
