import './MainVideo.scss'


function MainVideo({videoInfo, videoIndex}) {


  // const buttonClicked = () =>{
  //   setVideoIndex(videoIndex + 1);
  // }

console.log(videoIndex, "from mainVideo.js")

  return (

    <div>
      <video className="mainVideo__image" poster={videoInfo[videoIndex].image} controls></video>
    </div>
  );
}

export default MainVideo;