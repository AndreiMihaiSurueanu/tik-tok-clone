import { useEffect, useState } from "react";
// Firebase
import * as fb from "./firebase";
// Components
import Video from "./components/Video/Video";
// Styles
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fb.onSnapshot(fb.collection(fb.db, "videos"), (snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    // BEM naming convention
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
