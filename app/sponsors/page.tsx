import { getAllData } from "@/client";
import SponsorCarousel from "@/components/adoptions/sponsorCarousel/SponsorCarousel";
import SponsorGrid from "@/components/adoptions/sponsorGrid/SponsorGrid";
import React from "react";

const AdoptionsPage = async () => {
  const sponsors = await getAllData('sponsored')
 
  return (
    <div className="w-full mx-auto flex flex-col justify-center">
      <SponsorCarousel sponsors={sponsors} />
      <SponsorGrid sponsors={sponsors} />
    </div>
  );
};

export default AdoptionsPage;
