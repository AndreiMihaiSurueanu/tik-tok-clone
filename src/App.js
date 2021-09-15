// Components
import Video from "./components/Video/Video";
// Video
import { HAPPY_DOG_VIDEO } from "./config";
// Styles
import "./App.css";

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <div className="app__videos">
        <Video
          url={HAPPY_DOG_VIDEO}
          song="🎵James Brown - I feel good!😃😄🤪🥳"
        />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
