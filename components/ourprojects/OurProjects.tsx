import React from "react";
import Projects from "./projects/Projects";

import { OurProjectsProps } from "@/types/types";
import Container from "../layouts/container/Container";
import SubHeading from "../headings/subheading";
import EnterSection from "../animations/enterSection/EnterSection";
import EnterElement from "../animations/enterElement/EnterElement";
import LayoutY from "../layouts/layoutY/LayoutY";

const OurProjects = async ({ bg, color, projects }: OurProjectsProps) => {

  return (
    <EnterSection>
      <Container>
        <LayoutY>
          <SubHeading title="Our Projects" />
          <Projects projects={projects} bg={bg} color={color} />
        </LayoutY>
      </Container>
    </EnterSection>
  );
};

export default OurProjects;
