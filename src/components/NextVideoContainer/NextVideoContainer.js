import NextVideo from "../NextVideo/NextVideo";
import './NextVideoContainer.scss'

function NextVideoContainer({nextVideo}) {

  return (

    <div className="previewVideoContainer">
      <p className="previewVideoContainer__header">NEXT VIDEOS</p>
      {
        nextVideo.map((video, id) => {
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