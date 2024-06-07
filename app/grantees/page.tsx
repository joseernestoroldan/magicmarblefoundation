import { getAllData } from "@/client";
import EnterSection from "@/components/animations/enterSection/EnterSection";
import Heading from "@/components/headings/heading";
import HeadingCenterAnimation from "@/components/headingsAnimations/HeadingCenterAnimation";
import Container from "@/components/layouts/container/Container";
import Image from "next/image";

import React from "react";

const GranteesPage = async () => {
    const grantees = await getAllData("grantees")
    
  return (
    <HeadingCenterAnimation>
      <EnterSection>
        <div className="pt-10">
          <Heading
            title="Our Grantees"
            color="text-cyan-500"
            shadow=""
            textSize="text-5xl"
            center="flex justify-center"
          />
        </div>
        <Container>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center">
                {grantees.map((grant: any) => (
                    <div key={grant._id} className="w-[150px] h-[150px] relative mx-4">
                        <Image
                        src={grant.mainImage}
                        alt={grant.name}
                        fill
                        />
                    </div>
                ))}
                
            </div>
        </Container>
    </EnterSection>
    </HeadingCenterAnimation>
  );
};

export default GranteesPage;
