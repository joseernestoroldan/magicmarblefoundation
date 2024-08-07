import { getAllData } from "@/client";
import Gallery from "./Gallery";



const GalleryPage = async () => {
  const gallery = await getAllData("gallery");
  return (
    <Gallery gallery={gallery}/>
  );
};

export default GalleryPage;
