import React from "react";
import SubHeading from "../headings/subheading";
import Button from "../button/Button";
import { getAllData } from "@/client";
import CardDairies from "../card/Card";
import EnterSection from "../animations/enterSection/EnterSection";
import LayoutY from "../layouts/layoutY/LayoutY";
import Container from "../layouts/container/Container";
import Link from "next/link";

const MagicDairies = async () => {
  const diaries = await getAllData("dairies");

  return (
    <EnterSection>
      <Container>
        <LayoutY>
          <SubHeading title="Magic Dairies" />
          <div className="flex justify-center items-center space-x-6">
            <CardDairies
              src={diaries[0].mainImage ?? "/no-profile.webp"}
              title={diaries[0].title}
              body={diaries[0].body?.substring(0, 160)}
            />
            <CardDairies
              src={diaries[1].mainImage}
              title={diaries[1].title}
              body={diaries[1].body?.substring(0, 170)}
            />{" "}
            <CardDairies
              src={diaries[2].mainImage}
              title={diaries[2].title}
              body={diaries[2].body?.substring(0, 170)}
            />
          </div>
          <div className="flex justify-center">
            <Link href={"/diaries"}><Button>Go to Dairies</Button></Link>
            
          </div>
        </LayoutY>
      </Container>
    </EnterSection>
  );
};

export default MagicDairies;
