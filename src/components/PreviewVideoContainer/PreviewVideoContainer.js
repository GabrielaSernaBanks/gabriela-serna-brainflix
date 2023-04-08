import PreviewVideo from "../PreviewVideo/PreviewVideo";
import './PreviewVideoContainer.scss'

function PreviewVideoContainer({videoInfo, clickHandler}) {

  return (

    <div className="previewVideoContainer">
      <p className="previewVideoContainer__header">NEXT VIDEOS</p>
      {
        videoInfo.map((video, index) => {
          return(
            <PreviewVideo 
            clickHandler={clickHandler} 
            key={index} 
            index={index}
            video={video}/>
          )
        })
      }

    </div>
  );

    }

export default PreviewVideoContainer;