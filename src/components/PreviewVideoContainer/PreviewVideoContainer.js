import PreviewVideo from "../PreviewVideo/PreviewVideo";

function PreviewVideoContainer({videoInfo}) {

  return (

    <div>
      <h1>NEXT VIDEOS</h1>
      {
        videoInfo.map((video) => {
          return(
            <PreviewVideo key={video.id} video={video}/>
          )
        })
      }

    </div>
  );

    }

export default PreviewVideoContainer;