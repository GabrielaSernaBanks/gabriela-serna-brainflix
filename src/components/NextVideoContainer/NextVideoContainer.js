import NextVideo from "../NextVideo/NextVideo";
import "./NextVideoContainer.scss";

function NextVideoContainer({ nextVideo }) {
    return (
        <div className="nextVideoContainer">
            <p className="nextVideoContainer__header">NEXT VIDEOS</p>
            {nextVideo.map((video, id) => {
                return <NextVideo key={id} video={video} />;
            })}
        </div>
    );
}

export default NextVideoContainer;
