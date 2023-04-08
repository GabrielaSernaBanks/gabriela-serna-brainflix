import './PreviewVideo.scss'

function PreviewVideo({video, clickHandler, key }) {
  console.log(video.id, "hello");
  
  return (

    <div className="previewVideo">
      <img className="previewVideo__image" src={video.image}></img>
      <p>{video.channel}</p>
      <p>{video.title}</p>
      <button onclick={clickHandler(video, key)} key={key}>Click me</button>


    </div>
  );

}






export default PreviewVideo;