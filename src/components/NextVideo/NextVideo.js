import './NextVideo.scss'

function NextVideo({video, clickHandler, id }) {
  
  return (
    <div>
    {/* // <div  onClick={() => clickHandler(id)} className="nextVideo"> */}
      <div className='nextVideo__image-container'>
      <img className="nextVideo__image" src={video.image}></img>
      </div>
      <div className='nextVideo__info'>
        <p className="nextVideo__title">{video.title}</p>
        <p className="nextVideo__channel">{video.channel}</p>
      </div>

    </div>
  );

}

export default NextVideo;