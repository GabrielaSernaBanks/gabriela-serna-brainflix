import './MainVideo.scss'
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import CommentsContainer from '../../components/CommentsContainer/CommentsContainer';
import NextVideoContainer from '../../components/NextVideoContainer/NextVideoContainer';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const baseUrl = 'http://localhost:8081'

function MainVideo (){
	const { id } = useParams();
	const [videoList, setVideoList] = useState([]);

    let videoId = null;

    if(videoList.length > 0){
        videoId = videoList[0].id;
    }

	let videoSelectedId = id || videoId;
    const nextVideo = videoList.filter(video => video.id !== videoSelectedId)

    useEffect(()=> {
        axios
            .get(`${baseUrl}/videos`)
            .then((response)=>{
                setVideoList(response.data);
            })
    }, []);

    return (
        <div className='mainVideo'>
            <VideoDetails videoSelectedId={videoSelectedId} baseUrl={baseUrl}/>
            <div className='mainVideo__container'>
                <div className='mainVideo__comments'>
                    <CommentsContainer videoSelectedId={videoSelectedId} baseUrl={baseUrl} />
                </div>
                <div className='mainVideo__next-video'>
                    <NextVideoContainer nextVideo={nextVideo} />
                </div>
            </div>           
        </div>
        );
}

export default MainVideo;