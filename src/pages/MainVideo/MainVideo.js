import './MainVideo.scss'
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import CommentsContainer from '../../components/CommentsContainer/CommentsContainer';
import NextVideoContainer from '../../components/NextVideoContainer/NextVideoContainer';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const baseUrl = 'https://project-2-api.herokuapp.com'
const ApiKey = '?api_key=42e9c01f-8636-431d-964b-dbdc0c73435c'


function MainVideo (){
	const { id } = useParams();
	const [videoImage, setVideoImage] = useState();
	const [videoList, setVideoList] = useState([]);

    let videoId = null;

    if(videoList.length > 0){
        videoId = videoList[0].id;
    }

	let videoSelectedId = id || videoId;
    const nextVideo = videoList.filter(video => video.id !== videoSelectedId)
    console.log(videoSelectedId);


    
    useEffect(()=> {
        axios
            .get(`${baseUrl}/videos/${ApiKey}`)
            .then((response)=>{
                setVideoList(response.data);
            })
    }, [])

    console.log(videoList)

const changeHandler = (event) => {
    const selectVideo = event.target;
    setVideoImage(selectVideo.value);
}

    return (
        <div>
                <VideoDetails videoSelectedId={videoSelectedId} baseUrl={baseUrl} ApiKey={ApiKey}/>
                <CommentsContainer videoSelectedId={videoSelectedId} baseUrl={baseUrl} ApiKey={ApiKey} />
                <NextVideoContainer nextVideo={nextVideo} />
            
            <div className="app__previewVideoContainer"></div>
            </div>
        );
}

export default MainVideo;