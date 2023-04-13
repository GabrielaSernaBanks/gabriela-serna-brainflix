import PreviewVideo from "../PreviewVideo/PreviewVideo";
import './PreviewVideoContainer.scss'

function PreviewVideoContainer({videoList, clickHandler}) {

  return (

    <div className="previewVideoContainer">
      <p className="previewVideoContainer__header">NEXT VIDEOS</p>
      {
        videoList.map((video, index) => {
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