import PreviewVideo from "../PreviewVideo/PreviewVideo";

function PreviewVideoContainer({videoInfo, clickHandler}) {

  return (

    <div>
      <h1>NEXT VIDEOS</h1>
      {
        videoInfo.map((video, key) => {
          return(
            <PreviewVideo 
            clickHandler={clickHandler} 
            key={key} 
            video={video}/>
          )
        })
      }

    </div>
  );

    }

export default PreviewVideoContainer;