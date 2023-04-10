import './MainVideo.scss'

function MainVideo({videoInfo, videoIndex}) {

  return (

    <div className='mainVideo__container'>
      <video className="mainVideo__image" poster={videoInfo[videoIndex].image} controls></video>
    </div>
  );
}

export default MainVideo;