import Nav from "./components/Nav/Nav";
import MainVideo from "./components/MainVideo/MainVideo";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import React, {useState} from "react";
import videoInfo from './data/video-details.json'
import CommentsContainer from "./components/CommentsContainer/CommentsContainer";
import PreviewVideoContainer from "./components/PreviewVideoContainer/PreviewVideoContainer";


function App() {
  const [videoIndex, setVideoIndex] = useState(videoInfo[0]);

  console.log(videoInfo[videoIndex].id, "video id")

  const videoClicked = (videoId) => {
    const clickedVideo = videoInfo.find(video => video.id === videoId)
    setVideoIndex(clickedVideo);
  }

  const selectedVideo = videoInfo.filter(video => video.id !== videoInfo[videoIndex].id)


  return (
    <div>
      <Nav />
      <MainVideo videoInfo={videoInfo} videoIndex={videoIndex} />
      <VideoDetails videoInfo={videoInfo} videoIndex={videoIndex}/>
      <CommentsContainer videoInfo={videoInfo} videoIndex={videoIndex} />
      <PreviewVideoContainer clickHandler={videoClicked} videoInfo={selectedVideo} videoIndex={videoIndex}/>
    </div>
  );
}

export default App;

