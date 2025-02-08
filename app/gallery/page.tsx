import { getAllData } from "@/client";
import Gallery from "./Gallery";
import { QueryType } from "@/types/types";

const GalleryPage = async () => {
  const gallery: QueryType[]  = await getAllData("gallery");
 

  return <Gallery gallery={gallery} />;
};

export default GalleryPage;
