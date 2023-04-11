import './UploadPage.scss'

function UploadPage({videoInfo, videoIndex}) {

  return (

    <div className='uploadPage__container'>
      <h2>This is the upload component</h2>
      {/* <video className="mainVideo__image" poster={videoInfo[videoIndex].image} controls></video> */}
    </div>
  );
}

export default UploadPage;