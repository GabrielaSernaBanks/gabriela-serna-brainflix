import './PreviewVideo.scss'

function PreviewVideo( ) {
  
  return (
    <div  className="previewVideo">
      <h1>PREVIEW VIDEO</h1>
      <div className='previewVideo__image-container'>
      <img className="previewVideo__image" ></img>
      </div>
      <div className='previewVideo__info'>
        <p className="previewVideo__title"></p>
        <p className="previewVideo__channel"></p>
      </div>

    </div>
  );

}

export default PreviewVideo;