import React, { useRef, useState } from "react";
// Components
import VideoFooter from "../VideoFooter/VideoFooter";
import VideoSidebar from "../VideoSidebar/VideoSidebar";
// Styles
import "./Video.css";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };

  // TODO: Hide player controls

  return (
    <div className="video">
      <iframe
        title="happy dog"
        className="video__player"
        src={url}
        onClick={onVideoPress}
        ref={videoRef}
        allow="fullscreen"
        frameBorder="0"
      />
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;
