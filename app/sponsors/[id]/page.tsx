import { getOne } from "@/client";
import {
  QueryType,
} from "@/types/types";
import { SponsorButton } from "@/components/sponsorsComponents/SponsorButton";
import Paragraphs from "@/components/paragraphs/Paragraphs";
import { SponsorGallery } from "../../../components/sponsorsComponents/SponsorGallery";

const SponsorDynamicPage = async ({
  params: { id: _Id },
}: {
  params: { id: string };
}) => {
  const query: QueryType[] = await getOne(_Id);
  const [data] = query;
  const {
    _id,
    mainImage,
    secondImage,
    thirdImage,
    hotSpotMain,
    hotSpotSecond,
    hotSpotThird,
    youtubeLink,
    contenido,
  } = data;

  const url = youtubeLink ?? "";
  const urlParts = url.split("?v=");
  const queryString = urlParts[1];

  const videoEmbedUrl = `https://www.youtube.com/embed/${queryString}?autoplay=1&mute=1`;

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row space-y-4 md:space-y-0">
      <div className="w-full md:w-1/2 relative flex flex-col">
        <SponsorGallery
          videoLink={videoEmbedUrl}
          youtubeLink={youtubeLink}
          mainImage={mainImage}
          secondImage={secondImage}
          thirdImage={thirdImage}
          hotSpotMain={hotSpotMain}
          hotSpotSecond={hotSpotSecond}
          hotSpotThird={hotSpotThird}
          _id={_id}
        />
        <SponsorButton />
      </div>

      <div className="w-full md:w-1/2 pl-4">
        {contenido && <Paragraphs contenido={contenido} />}
      </div>
    </div>
  );
};

export default SponsorDynamicPage;



