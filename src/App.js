import Nav from "./components/Nav/Nav";
import MainVideo from "./components/MainVideo/MainVideo";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import React, {useState} from "react";
import videoInfo from './data/video-details.json'
import CommentsContainer from "./components/CommentsContainer/CommentsContainer";
import PreviewVideoContainer from "./components/PreviewVideoContainer/PreviewVideoContainer";


function App() {
  const [videoIndex, setVideoIndex] = useState(0);

  const selectedVideo = videoInfo.filter(
    (video) => video.id !== videoInfo[videoIndex].id);

    const videoClicked = (index) => {
      setVideoIndex(index + 1);
      console.log(index);
    };

  return (
    <div>
      <Nav />
      <MainVideo videoInfo={videoInfo} videoIndex={videoIndex} />
      <VideoDetails videoInfo={videoInfo} videoIndex={videoIndex}/>
      <CommentsContainer videoInfo={videoInfo} videoIndex={videoIndex} />
      <PreviewVideoContainer videoInfo={selectedVideo} videoIndex={videoIndex} clickHandler={videoClicked}/>
    </div>
  );
}

export default App;

