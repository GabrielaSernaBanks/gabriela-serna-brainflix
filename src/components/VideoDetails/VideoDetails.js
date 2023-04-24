import './VideoDetails.scss'
import likesIcon from '../../assets/Icons/likes.svg'
import viewsIcon from '../../assets/Icons/views.svg'
import { useEffect, useState } from 'react';
import axios from 'axios';

function VideoDetails({ videoSelectedId, baseUrl}) {
	const [video, setVideo] = useState(null);

	useEffect(() => {
		if (videoSelectedId === null) {
			return;
		}
		axios.get(`${baseUrl}/videos/${videoSelectedId}`)
			.then(response => {
				setVideo(response.data[0]);
			})
	}, [videoSelectedId]);

	if (video === null) {
		return <div>Loading!!</div>
	}
	const epoch = video.timestamp;
	const date = new Date(epoch).toLocaleDateString("en-US")

	const { title, channel, image, description, views, likes } = video;

	return (
		<div className='videoDetails'>
			<video className="videoDetails__image" poster={image} controls>
				<source src={video} type="video/mp4" />
			</video>
			<div className='videoDetails__container'>
				<h1 className='videoDetails__header videoDetails__header--tablet-desktop'>{title}</h1>
				<div className='videoDetails__details'>
					<div className='videoDetails__info'>
						<p className='videoDetails__channel'>By {channel}</p>
						<p className='videoDetails__date'>{date}</p>
					</div>
					<div className='videoDetails__info-2'>
						<p className='videoDetails__views'>
							<img className='videoDetails__icon' src={viewsIcon} alt='Eye icon'>
							</img>{views}
						</p>
						<p className='videoDetails__likes'>
							<img className='videoDetails__icon' src={likesIcon} alt='Heart icon'>
							</img>{likes}
						</p>
					</div>
				</div>
				<p className='videoDetails__description'>{description}</p>
			</div>
		</div>
	);
}

export default VideoDetails;