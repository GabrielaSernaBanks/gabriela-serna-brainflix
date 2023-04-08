import Nav from "./components/Nav/Nav";
import MainVideo from "./components/MainVideo/MainVideo";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import React, {useState} from "react";
import videoInfo from './data/video-details.json'
import CommentsContainer from "./components/CommentsContainer/CommentsContainer";
import PreviewVideoContainer from "./components/PreviewVideoContainer/PreviewVideoContainer";


function App() {
  const [videoIndex, setVideoIndex] = useState(0);

  return (
    <div>
      <Nav />
      <MainVideo videoInfo={videoInfo} videoIndex={videoIndex} />
      <VideoDetails videoInfo={videoInfo} videoIndex={videoIndex}/>
      <CommentsContainer videoInfo={videoInfo} videoIndex={videoIndex} />
      <PreviewVideoContainer videoInfo={videoInfo} videoIndex={videoIndex}/>
    </div>
  );
}

export default App;
