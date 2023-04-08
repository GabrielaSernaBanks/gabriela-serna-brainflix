import './PreviewVideo.scss'

function PreviewVideo({video, clickHandler, index }) {
  
  return (
    <div  onClick={() => clickHandler(index)} className="previewVideo">
      <div className='previewVideo__image-container'>
      <img className="previewVideo__image" src={video.image}></img>
      </div>
      <div className='previewVideo__info'>
        <p className="previewVideo__title">{video.title}</p>
        <p className="previewVideo__channel">{video.channel}</p>
      </div>

    </div>
  );

}

export default PreviewVideo;