import React from "react";
import Projects from "./projects/Projects";
import { getAllData } from "@/client";
import { OurProjectsProps } from "@/types/types";
import Container from "../layouts/container/Container";
import SubHeading from "../headings/subheading";
import EnterSection from "../animations/enterSection/EnterSection";
import EnterElement from "../animations/enterElement/EnterElement";
import LayoutY from "../layouts/layoutY/LayoutY";

const OurProjects = async ({ bg, color }: OurProjectsProps) => {
  const projects = await getAllData("projects");

  return (
    <EnterSection>
      <Container>
        <LayoutY>
          <SubHeading title="Our Projects" />

          <EnterElement>
            <Projects projects={projects} bg={bg} color={color} />
          </EnterElement>
        </LayoutY>
      </Container>
    </EnterSection>
  );
};

export default OurProjects;
