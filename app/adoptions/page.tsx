import { getAllData } from "@/client";
import AdoptionCarousel from "@/components/adoptions/adoptionCarousel/AdoptionCarousel";
import AdoptionGrid from "@/components/adoptions/adoptionGrid/AdoptionGrid";
import AdoptionResponsiveCarousel from "@/components/adoptions/responsiveCarousel/AdoptionResponsiveCarousel";
import React from "react";

const AdoptionsPage = async () => {
  const adoptions = await getAllData('adoptions')
 
  return (
    <div className="w-full mx-auto flex flex-col justify-center">
      <AdoptionResponsiveCarousel adoptions={adoptions}/>
      <AdoptionCarousel adoptions={adoptions} />
      <AdoptionGrid adoptions={adoptions} />
    </div>
  );
};

export default AdoptionsPage;
