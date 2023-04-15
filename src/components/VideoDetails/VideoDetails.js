import './VideoDetails.scss'
import likesIcon from '../../assets/Icons/likes.svg'
import viewsIcon from '../../assets/Icons/views.svg'
import { useEffect, useState } from 'react';
import axios from 'axios';

function VideoDetails({videoSelectedId, baseUrl, ApiKey}) {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    if(videoSelectedId === null){
      return;
    }
    axios.get(`${baseUrl}/videos/${videoSelectedId}${ApiKey}`)
      .then(response => {
        setVideo(response.data);
      }
        )
  }, [videoSelectedId]);
      console.log(video);

      if(video === null) {
        return <div>Loading!!</div>
    }   

  const epoch = video.timestamp;
  const date = new Date(epoch).toLocaleDateString("en-US")

  const {title, channel, image, description, views, likes} = video;


  return (
    <div className='mainVideo__container'>
            <video className="mainVideo__image" poster={image} controls></video>
            <div className="app__desktopDivMain">
            <div className="app__desktopDivDetails"> 
    </div>
    </div>
    <div className='videoDetails'>
    <h1 className='videoDetails__header'>{title}</h1>
    <div className='videoDetails__container'>
      <div className='videoDetails__info'>
          <p className='videoDetails__channel'>By {channel}</p>
          <p className='videoDetails__date'>{date}</p>
      </div>
      <div className='videoDetails__info-2'>
          <p className='videoDetails__views'><img className='videoDetails__icon' src={viewsIcon}></img>{views}</p>
          <p className='videoDetails__likes'><img className='videoDetails__icon' src={likesIcon}></img>{likes}</p>

      </div>
    </div> 
    <p className='videoDetails__description'>{description}</p>
    </div>
    </div>
  );
}

export default VideoDetails;