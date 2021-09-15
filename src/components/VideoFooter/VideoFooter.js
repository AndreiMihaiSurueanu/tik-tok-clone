import React from "react";
// Styles
import "./VideoFooter.css";
// Icons
import MusicNoteIcon from "@material-ui/icons/MusicNote";
// Ticker
import Ticker from "react-ticker";

function VideoFooter({ channel, descripion, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p>{descripion}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ idex }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
        className="videoFooter__record"
      />
    </div>
  );
}

export default VideoFooter;
