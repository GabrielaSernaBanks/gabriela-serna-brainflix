import PreviewVideo from "../PreviewVideo/PreviewVideo";

function PreviewVideoContainer({videoInfo, clickHandler}) {

  return (

    <div>
      <h1>NEXT VIDEOS</h1>
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