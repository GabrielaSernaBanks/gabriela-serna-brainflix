



function VideoDetails({videoInfo, videoIndex}) {
  const epoch = videoInfo[videoIndex].timestamp;
  const date = new Date(epoch).toLocaleDateString("en-US")

  return (

    <div>
      <h1>{videoInfo[videoIndex].title}</h1>
      <h1>{videoInfo[videoIndex].channel}</h1>
      <h1>{date}</h1>
      <h1>{videoInfo[videoIndex].views}</h1>
      <h1>{videoInfo[videoIndex].likes}</h1>
      <p>{videoInfo[videoIndex].description}</p>
    </div>
  );

}






export default VideoDetails;