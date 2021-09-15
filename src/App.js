// Styles
import "./App.css";
// Components
import Video from "./components/Video/Video";

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <div className="app__videos">
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
