import './NextVideo.scss'
import { Link } from 'react-router-dom';

function NextVideo({ video }) {
    return (
        <div>
            <Link className='nextVideo__link' to={`/video/${video.id}`}>
                <div className='nextVideo__image-container'>
                    <img className="nextVideo__image" src={video.image}></img>
                </div>
            </Link>
            <div className='nextVideo__info'>
                <p className="nextVideo__title">{video.title}</p>
                <p className="nextVideo__channel">{video.channel}</p>
            </div>
        </div>
    );

}

export default NextVideo;