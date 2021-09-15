import React from "react";
// Video
import { HAPPY_DOG_VIDEO } from "../../config";
// Components
import VideoFooter from "../VideoFooter/VideoFooter";
import VideoSidebar from "../VideoSidebar/VideoSidebar";
// Styles
import "./Video.css";

function Video() {
  return (
    <div className="video">
      <iframe
        title="happy dog"
        className="video__player"
        src={HAPPY_DOG_VIDEO}
      />
      <VideoFooter />
      <VideoSidebar />
    </div>
  );
}

export default Video;
