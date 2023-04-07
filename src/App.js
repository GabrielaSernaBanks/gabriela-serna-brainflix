import Nav from "./components/Nav/Nav";
import MainVideo from "./components/MainVideo/MainVideo";
// import PreviewVideos from "./components/PreviewVideos/PreviewVideos";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import Comments from "./components/CommentsContainer/CommentsContainer";
import React, {useState} from "react";
import videoInfo from './data/video-details.json'


function App() {
  const [videoIndex, setVideoIndex] = useState(4);

  // const videoClick = (videoId) =>{
  //   const selectedVideo = videoInfo.find(video => video.id ===videoId)
  //   setVideoIndex(selectedVideo);
  // }

  // const filteredVideos = videos.filter(video => video.id !== selectedVideo.id)
console.log(videoIndex, "from App.js");

  return (
    <div>
      <Nav />
      <MainVideo videoInfo={videoInfo} videoIndex={videoIndex} />
      <VideoDetails videoInfo={videoInfo} videoIndex={videoIndex}/>
    </div>
  );
}

export default App;
