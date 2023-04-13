import './VideoDetails.scss'
import likes from '../../assets/Icons/likes.svg'
import views from '../../assets/Icons/views.svg'



function VideoDetails() {
  // const epoch = videoInfo[videoIndex].timestamp;
  // const date = new Date(epoch).toLocaleDateString("en-US")

  return (
    <div className='videoDetails'>
    <h1 className='videoDetails__header'></h1>
    <div className='videoDetails__container'>
      <div className='videoDetails__info'>
          <p className='videoDetails__channel'>By </p>
          <p className='videoDetails__date'></p>
      </div>
      <div className='videoDetails__info-2'>
          <p className='videoDetails__views'> <img className='videoDetails__icon' ></img></p>
          <p className='videoDetails__likes'> <img className='videoDetails__icon'></img></p>

      </div>
    </div> 
    <p className='videoDetails__description'></p>
    </div>
  
  );

}


export default VideoDetails;