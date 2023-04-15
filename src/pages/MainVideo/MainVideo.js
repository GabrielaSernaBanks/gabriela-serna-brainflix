import './MainVideo.scss'
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import CommentsContainer from '../../components/CommentsContainer/CommentsContainer';
import PreviewVideoContainer from '../../components/NextVideoContainer/NextVideoContainer';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const baseUrl = 'https://project-2-api.herokuapp.com'
const ApiKey = '?api_key=42e9c01f-8636-431d-964b-dbdc0c73435c'


function MainVideo (){
	const { id } = useParams();
	const [videoImage, setVideoImage] = useState();
	const [videoList, setVideoList] = useState([]);

	
    // const selectedVideo = videoList.find(video => video.id === videoId)
    // setVideoImage(selectedVideo);


const changeHandler = (event) => {
    const selectVideo = event.target;
    setVideoImage(selectVideo.value);
}

  //to get the image from the first item of the array
	useEffect(()=> {
        axios
            .get(`${baseUrl}/videos/${ApiKey}`)
            .then((response)=>{
                setVideoList(response.data);
            })
    }, [])

    return (
    <div className='mainVideo__container'>
        <video className="mainVideo__image" poster={videoImage} controls>
          {/* <source src={videoImage}  /> */}
        <img />
        </video>
        <div className="app__desktopDivMain">
        <div className="app__desktopDivDetails"> {

        }
            <VideoDetails />
            <CommentsContainer />
            <PreviewVideoContainer videoList={videoList} />
        </div>
        <div className="app__previewVideoContainer"></div>
        </div>
    </div>
    );

}

export default MainVideo;