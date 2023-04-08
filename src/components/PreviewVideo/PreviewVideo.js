import './PreviewVideo.scss'

function PreviewVideo({video, clickHandler, index }) {
  
  return (
    <div  onClick={() => clickHandler(index)} className="previewVideo">
      <img className="previewVideo__image" src={video.image}></img>
      <p>{video.channel}</p>
      <p>{video.title}</p>
    </div>
  );

}

export default PreviewVideo;