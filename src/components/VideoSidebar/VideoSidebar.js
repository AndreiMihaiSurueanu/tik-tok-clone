import React, { useState } from "react";
// Styles
import "./VideoSidebar.css";
// Icons
import FavouriteIcon from "@material-ui/icons/Favorite";
import FavouriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

function VideoSidebar({ likes, messages, shares }) {
  const [liked, setLiked] = useState(false);

  const round = (num) => {
      if (num / 1000000 > 1) {
        return num/1000000 + 'M' 
      } else if (num/1000 > 1) {
          return num/1000 + 'K'
      } else {
        return num
      }
  }

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavouriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
        ) : (
          <FavouriteBorderIcon
            fontSize="large"
            onClick={(e) => setLiked(true)}
          />
        )}
        <p>{liked && (likes / 1000 <= 0) ? likes + 1 : round(likes)}</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="large" />
        <p>{round(messages)}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>{round(shares)}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
