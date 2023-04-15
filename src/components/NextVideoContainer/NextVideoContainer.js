import NextVideo from "../NextVideo/NextVideo";
import './NextVideoContainer.scss'

function NextVideoContainer({videoList}) {

  return (

    <div className="previewVideoContainer">
      <p className="previewVideoContainer__header">NEXT VIDEOS</p>
      {
        videoList.map((video, id) => {
          return(
            <NextVideo 
            // clickHandler={clickHandler} 
            key={id} 
            // index={index}
            video={video}/>
          )
        })
      }

    </div>
  );

    }

export default NextVideoContainer;