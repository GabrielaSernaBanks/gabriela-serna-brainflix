import './UploadPage.scss'
import publishIcon from '../../assets/Icons/publish.svg'
import thumbnail from '../../assets/Images/Upload-video-preview.jpg'

function UploadPage() {

  return (

    <div className='uploadPage'>
      <h1 className='uploadPage__header'>Upload Video</h1>
      <img src={thumbnail} />
      <div className='uploadPage__video-container'>
        <p>VIDEO THUMBNAIL</p>
        {/* <video className="mainVideo__image" poster={videoInfo[videoIndex].image} controls></video> */}
      </div>
      <div className='uploadPage__form-container'>
      <form className="uploadPage__form">
            <div className="uploadPage__formInput">
            <label className="uploadPage__title" for="comment">
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
            <input
            required
            type="text"
            className="uploadPage__video-description"
            id="newVideo"
            name="description"
            placeholder="Add a description to your video"
            ></input>
            </div>
            <button className="uploadPage__button">
            <img className='uploadPage__button-icon' src={publishIcon}></img>
            <span className="uploadPage__button-text">PUBLISH</span>
            </button>
            <p>CANCEL</p>
            {/* <button className="uploadPage__button-cancel">CANCEL
            </button> */}
        </form>
      </div>
    </div>
  );
}

export default UploadPage;