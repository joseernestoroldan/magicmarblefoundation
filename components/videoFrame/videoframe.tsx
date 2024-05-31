import React from "react";
import { VideoFrameProps } from "@/types/types";
import EnterSection from "../animations/enterSection/EnterSection";
import EnterElement from "../animations/enterElement/EnterElement";

const VideoFrame = ({ src, bg }: VideoFrameProps) => {
  return (
    <EnterSection>
      <EnterElement>
        <div
          className={`w-full flex flex-row justify-center items-center bg-blue-400`}
        >
          <div className="w-full aspect-video h-auto object-cover relative">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={src}
              title="Magic Marble Foundation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </EnterElement>
    </EnterSection>
  );
};

export default VideoFrame;
