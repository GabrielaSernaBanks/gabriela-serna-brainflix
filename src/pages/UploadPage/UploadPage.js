import './UploadPage.scss'
import publishIcon from '../../assets/Icons/publish.svg'
import { useState } from 'react';
import axios from 'axios';



function UploadPage() {
	const [formSumbission, setFormSubmission] = useState(false);
	const baseUrl = 'http://localhost:8081'
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const handleClick = (event) => {
		event.preventDefault();

		const newVideo = {
			title: title,
			description: description,
			image: "http://localhost:8081/images/Upload-video-preview.jpg"
		}


		if (title && description) {
			axios.post(`${baseUrl}/videos`, newVideo)
				.then((response) => {
					console.log(response.data);
				})
				.catch((error) => {
					console.error(error);
				})

			alert('Video Uploaded!');
			window.location.href = '/';
		} else {
			setFormSubmission(true);
			alert('Please fill in both fields.');
		}
	}


	return (
		<div className='uploadPage'>
			<div className='uploadPage__header-container'>
				<h1 className='uploadPage__header'>Upload Video</h1>
			</div>
			<div className='uploadPage__items'>
				<div className='uploadPage__image-container'>
					<p className='uploadPage__subheader'>VIDEO THUMBNAIL</p>
					<img className='uploadPage__thumbnail' src='http://localhost:8081/images/Upload-video-preview.jpg' alt='Video Thumbnail' />
				</div>
				<div className='uploadPage__form-container'>
					<form className="uploadPage__form">
						<div className="uploadPage__formInput">
							<label className="uploadPage__title" htmlFor="comment">
								TITLE YOUR VIDEO
							</label>
							<input
								required
								type="text"
								className="uploadPage__video-title"
								id="newVideo"
								name="title"
								placeholder="Add a title to your video"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							></input>
							<label className="uploadPage__description" htmlFor="comment">
								ADD A VIDEO DESCRIPTION
							</label>
							<input
								required
								type="text"
								className="uploadPage__video-description"
								id="newVideo"
								name="description"
								placeholder="Add a description to your video"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							></input>
						</div>
					</form>
				</div>
			</div>
			<div className='uploadPage__buttons'>
				<button onClick={handleClick} className="uploadPage__button">
					<img className='uploadPage__button-icon' src={publishIcon} alt='Arrow icon'></img>
					<span className="uploadPage__button-text">PUBLISH</span>
				</button>
				<button className="uploadPage__button-cancel">CANCEL
				</button>
			</div>
		</div>
	);
}

export default UploadPage;