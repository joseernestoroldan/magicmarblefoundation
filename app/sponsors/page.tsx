import { getAllData } from "@/client";
import SponsorCarousel from "@/components/adoptions/sponsorCarousel/SponsorCarousel";
import SponsorGrid from "@/components/adoptions/sponsorGrid/SponsorGrid";
import { QueryType } from "@/types/types";
import Link from "next/link";


const AdoptionsPage = async () => {
  const sponsors:QueryType[] = await getAllData('sponsored')
 
  return (
    <div className="w-full mx-auto flex flex-col justify-center items-center">
      <SponsorCarousel sponsors={sponsors} />
      <SponsorGrid sponsors={sponsors} />
      <Link className="text-cyan-500 underline" href={"/cancel-sponsor"}>Unsubscribe Sponsorship</Link>
      
    </div>
  );
};

export default AdoptionsPage;
