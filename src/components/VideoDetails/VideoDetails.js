import './VideoDetails.scss'
import likes from '../../assets/Icons/likes.svg'
import views from '../../assets/Icons/views.svg'



function VideoDetails({videoInfo, videoIndex}) {
  const epoch = videoInfo[videoIndex].timestamp;
  const date = new Date(epoch).toLocaleDateString("en-US")

  return (
    <div className='videoDetails'>
    <h1 className='videoDetails__header'>{videoInfo[videoIndex].title}</h1>
    <div className='videoDetails__container'>
      <div className='videoDetails__info'>
          <p className='videoDetails__channel'>By {videoInfo[videoIndex].channel}</p>
          <p className='videoDetails__date'>{date}</p>
      </div>
      <div className='videoDetails__info-2'>
          <p className='videoDetails__views'> <img src={views} ></img>{videoInfo[videoIndex].views}</p>
          <p className='videoDetails__likes'> <img src={likes} ></img>{videoInfo[videoIndex].likes}</p>

      </div>
    </div> 
    <p className='videoDetails__description'>{videoInfo[videoIndex].description}</p>
    </div>
  
  );

}


export default VideoDetails;