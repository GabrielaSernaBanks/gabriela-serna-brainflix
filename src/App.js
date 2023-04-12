import Nav from "./components/Nav/Nav";
import MainVideo from "./components/MainVideo/MainVideo";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import React, { useState } from "react";
import videoInfo from "./data/video-details.json";
import CommentsContainer from "./components/CommentsContainer/CommentsContainer";
import PreviewVideoContainer from "./components/PreviewVideoContainer/PreviewVideoContainer";
import "./App.scss";
import UploadPage from "./pages/UploadPage/UploadPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// "api_key": "42e9c01f-8636-431d-964b-dbdc0c73435c"


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
    <BrowserRouter>
      <Nav />
    <div>
      {/* <MainVideo videoInfo={videoInfo} videoIndex={videoIndex} /> */}
      
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

      <Routes>
        <Route path='/' element={<MainVideo videoInfo={videoInfo} videoIndex={videoIndex} />} />
        <Route path='upload-page' element={<UploadPage />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
