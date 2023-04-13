import PreviewVideo from "../PreviewVideo/PreviewVideo";
import './PreviewVideoContainer.scss'

function PreviewVideoContainer() {

  return (

    <div className="previewVideoContainer">
      <p className="previewVideoContainer__header">NEXT VIDEOS</p>
      
        {/* // videoInfo.map((video, index) => { */}
          {/* // return( */}
            <PreviewVideo />
          


    </div>
  );

    }

export default PreviewVideoContainer;