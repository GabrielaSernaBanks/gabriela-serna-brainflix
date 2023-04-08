import './PreviewVideo.scss'

function PreviewVideo({video, clickHandler, index }) {
  
  return (
    <div  onClick={() => clickHandler(index)} className="previewVideo">
      <img className="previewVideo__image" src={video.image}></img>
      <div className='previewVideo__info'>
        <p className="previewVideo__title">{video.title}</p>
        <p className="previewVideo__channel">{video.channel}</p>
      </div>

    </div>
  );

}

export default PreviewVideo;