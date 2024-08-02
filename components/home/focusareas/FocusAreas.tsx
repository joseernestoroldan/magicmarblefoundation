import React from "react";
import Container from "../../layouts/container/Container";
import SubHeading from "../../headings/subheading";
import FocusCard from "./FocusCard";
import EnterSection from "@/components/animations/enterSection/EnterSection";
import LayoutY from "@/components/layouts/layoutY/LayoutY";
import { getAllData } from "@/client";

const FocusAreas = async () => {

const focusAreasList = await getAllData("focusAreas");


  return (
    <EnterSection>
      <Container>
        <LayoutY>
          <SubHeading title="Our Focus Areas" />
          <div className="w-full flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 space-x-1">
            {focusAreasList.map((area: any) => {
              return (
              
                <FocusCard
                  src={area.mainImage}
                  title={area.title}
                  body={area.body}
                  alt={area.alt || "magic marble foundation"}
                  key={area.title}
                  _id={area._id}
                />
              );
            })}
          </div>
        </LayoutY>
      </Container>
    </EnterSection>
  );
};

export default FocusAreas;
