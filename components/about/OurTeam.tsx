import { TabsTeam } from "./Tabs";
import SubHeading from "../headings/subheading";
import EnterSection from "../animations/enterSection/EnterSection";
import LayoutY from "../layouts/layoutY/LayoutY";

const OurTeam = () => {
  return (
    <EnterSection>
      <LayoutY>
        <SubHeading title="Our Team" />
          <TabsTeam />
      </LayoutY>
    </EnterSection>
  );
};

export default OurTeam;
