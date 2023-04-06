import React, {useState} from "react";
import videos from "../../data/videos";
import './MainVideo.scss'


function MainVideo() {

  const [videoIndex, setVideoIndex] = useState(0);

  const buttonClicked = () =>{
    setVideoIndex(videoIndex + 1);
    console.log('button was clicked', videoIndex)
  }



  return (

    <div>
      <img className="mainVideo__image" src={videos[videoIndex].image}></img>
      <button onClick={buttonClicked}>Click Here {videoIndex}</button>

    </div>
  );
}

export default MainVideo;