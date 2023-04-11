import Nav from "./components/Nav/Nav";
import MainVideo from "./components/MainVideo/MainVideo";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import React, { useState } from "react";
import videoInfo from "./data/video-details.json";
import CommentsContainer from "./components/CommentsContainer/CommentsContainer";
import PreviewVideoContainer from "./components/PreviewVideoContainer/PreviewVideoContainer";
import "./App.scss";
import UploadPage from "./pages/UploadPage/UploadPage";

function App() {
  const [videoIndex, setVideoIndex] = useState(0);

  const selectedVideo = videoInfo.filter(
    (video) => video.id !== videoInfo[videoIndex].id
  );

  const videoClicked = (index) => {
    setVideoIndex(index + 1);
    console.log(index);
  };

  return (
    <div>
      <Nav />
      <MainVideo videoInfo={videoInfo} videoIndex={videoIndex} />
      <UploadPage />
      <div className="app__desktopDivMain">
        <div className="app__desktopDivDetails">
          <VideoDetails videoInfo={videoInfo} videoIndex={videoIndex} />
          <CommentsContainer videoInfo={videoInfo} videoIndex={videoIndex} />
        </div>
        <div className="app__previewVideoContainer">
          <PreviewVideoContainer
            videoInfo={selectedVideo}
            videoIndex={videoIndex}
            clickHandler={videoClicked}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
