import './MainVideo.scss'
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import CommentsContainer from '../../components/CommentsContainer/CommentsContainer';
import PreviewVideoContainer from '../../components/PreviewVideoContainer/PreviewVideoContainer';
import { useState, useEffect } from "react";
import axios from 'axios';

const baseUrl = 'https://project-2-api.herokuapp.com'
const ApiKey = '?api_key=42e9c01f-8636-431d-964b-dbdc0c73435c'


function MainVideo (){

  const [videoImage, setVideoImage] = useState('image');
  const [videoImages, setVideoImages] = useState([]);
  const changeHandler = (event) => {
    const selectVideoImage = event.target;
    setVideoImage(videoImage.image)
  }

  useEffect(()=>{
    axios
    .get(`${baseUrl}/videos${ApiKey}`)
    .then((response)=>{
      setVideoImages(response.data);
    })
    }, []);

    return (
      <div className='mainVideo__container'>
        <video className="mainVideo__image" controls>
          
        </video>
        <div className="app__desktopDivMain">
          <div className="app__desktopDivDetails">
            <VideoDetails  />
            <CommentsContainer />
          </div>
          <div className="app__previewVideoContainer"></div>
        </div>
      </div>
    );
  
}

export default MainVideo;