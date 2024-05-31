import AboutUs from "@/components/about/AboutUs";

import OurTeam from "@/components/about/OurTeam";
import GridDIaries from "@/components/diaries/author/gridDiaries/GridDIaries";
import Donations from "@/components/home/donations/Donations";
import FocusAreas from "@/components/home/focusareas/FocusAreas";
import Container from "@/components/layouts/container/Container";
import LayoutY from "@/components/layouts/layoutY/LayoutY";
import BannerParallax from "@/components/parallax/bannerParallax/bannerParallax";
import ParallaxContainer from "@/components/parallax/parallax";
import VideoFrame from "@/components/videoFrame/videoframe";

import React from "react";

const AboutPage = () => {
  return (
    <div>
      <Container>
        <AboutUs />
      </Container>
      <LayoutY>
        <Container>
          <FocusAreas />
        </Container>
        <ParallaxContainer bgImage="bg-map.png" opacity="0.1">
          <BannerParallax
            title="Our Mission"
            message="To Mobilize Empathy for all species and the world we share"
            bg="bg-cyan-200"
            justify="text-center"
          />
        </ParallaxContainer>

        <VideoFrame
          src="https://www.youtube.com/embed/_cj-XrMSUWM?autoplay=1&mute=1"
          bg={"bg-white"}
        />

        <ParallaxContainer bgImage="bg-map.png" opacity="0.1">
          <BannerParallax
            title="Our Values"
            message="At Magic Marble Foundation, our values are anchored in equality, holistic care, and a commitment to providing help without causing harm. Rooted in the belief that every action has a profound impact, we embrace veganism as a cornerstone of our dedication to compassionate practices and environmental stewardship. We envision a world where all sentient beings, both humans and non-humans, can thrive without experiencing harm. Join us in shaping a future where support is synonymous with sustainability, empathy, and the well-being of all."
            bg="bg-cyan-200"
            justify="text-justify indent-6"
          />
        </ParallaxContainer>
        <Donations />
        <Container>
          <OurTeam />
        </Container>
      </LayoutY>
    </div>
  );
};

export default AboutPage;
