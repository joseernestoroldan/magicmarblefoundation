import { getAllData } from "@/client";
import EnterSection from "@/components/animations/enterSection/EnterSection";
import Container from "@/components/layouts/container/Container";
import Projects from "@/components/ourprojects/projects/Projects";
import Heading from "@/components/headings/heading";
import React from "react";
import HeadingCenterAnimation from "@/components/headingsAnimations/HeadingCenterAnimation";
import Donations from "@/components/home/donations/Donations";

const ProjectsPage = async () => {
  const projects = await getAllData("projects");

  return (
    <HeadingCenterAnimation>
      <EnterSection>
        <div className="pt-20">
          <Heading
            title="Our Projects"
            color="text-cyan-500"
            shadow=""
            textSize="text-5xl"
            center="flex justify-center "
          />
        </div>

        <Container>
          <Projects projects={projects} bg="bg-white" color="text-gray-500" />
        </Container>

        <Donations />
      </EnterSection>
    </HeadingCenterAnimation>
  );
};

export default ProjectsPage;
