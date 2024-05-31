import React from "react";
import ParallaxContainer from "../../parallax/parallax";
import VideoFrame from "../../videoFrame/videoframe";
import { MagicFrameProps } from "@/types/types";
import Container from "../../layouts/container/Container";
import SubHeading from "../../headings/subheading";
import EnterSection from "@/components/animations/enterSection/EnterSection";
import EnterElement from "@/components/animations/enterElement/EnterElement";
import LayoutY from "@/components/layouts/layoutY/LayoutY";
import BannerParagraph from "@/components/parrafos/BannerParagraph";

const MagicFrame = ({ bg }: MagicFrameProps) => {
  return (
    <EnterSection>
      <LayoutY>
        <SubHeading title="A Bit Of Magic" />
        <EnterElement>
         
            <VideoFrame
              src="https://www.youtube.com/embed/Y8e-XFkNoAk?autoplay=1&mute=1"
              bg={bg}
            />
         
        </EnterElement>
      </LayoutY>
    </EnterSection>
  );
};

export default MagicFrame;
