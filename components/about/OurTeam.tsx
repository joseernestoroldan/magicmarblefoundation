import React from "react";
import { TabsTeam } from "./Tabs";
import SubHeading from "../headings/subheading";
import EnterElement from "../animations/enterElement/EnterElement";
import EnterSection from "../animations/enterSection/EnterSection";
import LayoutY from "../layouts/layoutY/LayoutY";

const OurTeam = () => {
  return (
    <EnterSection>
      <LayoutY>
        <SubHeading title="Our Team" />
        <EnterElement>
          <TabsTeam />
        </EnterElement>
      </LayoutY>
    </EnterSection>
  );
};

export default OurTeam;
