import MagicFrame from "@/components/home/magicFrame/MagicFrame";
import ParallaxContainer from "@/components/parallax/parallax";
import BannerParallax from "@/components/parallax/bannerParallax/bannerParallax";
import Banner from "@/components/banner/banner";
import OurProjects from "@/components/ourprojects/OurProjects";
import Donations from "@/components/home/donations/Donations";
import GridDIaries from "@/components/diaries/author/gridDiaries/GridDIaries";
import { getOrderedData } from "@/client";
import OurPartners from "@/components/ourpartners/OurPartners";
import { QueryType} from "@/types/types";


const HomePage = async () => {
 
  const projects: QueryType[] | null =  await getOrderedData("projects", "5");
  const diaries: QueryType[] | null = await getOrderedData("dairies", "2");

  return (
    <div className="w-full flex-col justify-center items-center space-y-24 overflow-hidden">
      <Banner />

      <ParallaxContainer bgImage="bg-map.png" opacity="0.1">
        <BannerParallax
          title="Our Mission"
          message="To Mobilize Empathy for all species and the world we share"
          bg="bg-cyan-200"
          justify="text-center"
        />
      </ParallaxContainer>

      {diaries && <GridDIaries diaries={diaries} />}

      <MagicFrame bg="bg-white" />
      <ParallaxContainer bgImage="bg-map.png" opacity="0.1">
        <BannerParallax
          title=""
          message="At the Magic Marble Foundation, we are a dedicated team of
                individuals striving to create a better world through empathy
                and action. Our organization is committed to empowering
                underserved communities, promoting animal welfare, and
                championing environmental activism. Together, we work diligently
                to cultivate a compassionate global community that respects and
                values all living beings and the environment we share."
          bg="bg-cyan-300"
          justify="text-justify indent-6"
        />
      </ParallaxContainer>

      <OurProjects bg="bg-white" color="text-gray-800" projects={projects} />

      <Donations />

      <OurPartners />
    </div>
  );
};

export default HomePage;
