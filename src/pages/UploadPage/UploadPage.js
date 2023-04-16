import './UploadPage.scss'
import publishIcon from '../../assets/Icons/publish.svg'
import thumbnail from '../../assets/Images/Upload-video-preview.jpg'

function UploadPage() {

	return (

		<div className='uploadPage'>
			<div className='uploadPage__header-container'>
				<h1 className='uploadPage__header'>Upload Video</h1>
			</div>
			<div className='uploadPage__image-container'>
				<p className='uploadPage__subheader'>VIDEO THUMBNAIL</p>
				<img className='uploadPage__thumbnail' src={thumbnail} />
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
						></input>
					</div>
					<div className='uploadPage__buttons'>
						<button className="uploadPage__button">
							<img className='uploadPage__button-icon' src={publishIcon}></img>
							<span className="uploadPage__button-text">PUBLISH</span>
						</button>
						<button className="uploadPage__button-cancel">CANCEL
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default UploadPage;