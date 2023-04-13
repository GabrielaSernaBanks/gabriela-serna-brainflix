import './MainVideo.scss'
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import CommentsContainer from '../../components/CommentsContainer/CommentsContainer';
import PreviewVideoContainer from '../../components/PreviewVideoContainer/PreviewVideoContainer';
import videoInfo from "../../data/video-details.json";
import React, { useState, useEffect } from "react";
import axios from 'axios';



function MainVideo (){

  const [videoImage, setVideoImage] = useState('image');
  const changeHandler = (event) => {
    const selectVideoImage = event.target;
    setVideoImage(select.image)
  }


  
}
  // const [videoIndex, setVideoIndex] = useState(0);
  // const selectedVideo = videoInfo.filter(
  //   (video) => video.id !== videoInfo[videoIndex].id
  // );

  // const videoClicked = (index) => {
  //   setVideoIndex(index + 1);
  // };

  return (

    <div className='mainVideo__container'>
      <video className="mainVideo__image" poster={videoInfo[videoIndex].image} controls></video>
      <div className="app__desktopDivMain">
        <div className="app__desktopDivDetails">
          <MainVideo videoInfo={videoInfo} videoIndex={videoIndex} />
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

export default MainVideo;