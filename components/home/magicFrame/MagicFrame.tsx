import React from "react";
import VideoFrame from "../../videoFrame/videoframe";
import { MagicFrameProps } from "@/types/types";
import SubHeading from "../../headings/subheading";
import EnterSection from "@/components/animations/enterSection/EnterSection";

import LayoutY from "@/components/layouts/layoutY/LayoutY";

const MagicFrame = ({ bg }: MagicFrameProps) => {
  return (
    <EnterSection>
      <LayoutY>
        <SubHeading title="A Bit Of Magic" />
        <VideoFrame
          src="https://www.youtube.com/embed/Y8e-XFkNoAk?autoplay=1&mute=1"
          bg={bg}
        />
      </LayoutY>
    </EnterSection>
  );
};

export default MagicFrame;
