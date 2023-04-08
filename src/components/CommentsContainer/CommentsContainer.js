import Comment from '../Comment/Comment';
import './CommentsContainer.scss'
import avatar from '../../assets/Images/Mohan-muruge.jpg'


function CommentsContainer({videoInfo, videoIndex}) {
  const commentCount = videoInfo[videoIndex].comments.length
  
  return (
    <div className='commentsContainer'>
      <p className='commentsContainer__count'> {commentCount} Comments</p>
      <div className="commentsContainer__details">
        <img className="commentsContainer__avatar" src={avatar} alt="Side photo of a fan"></img>
        <form className="commentsContainer__form">
          <label className="commentsContainer__title" for="comment">JOIN THE CONVERSATION</label>
          <input required type="text" className="commentsContainer__newComment" id="newComment" name="comment" placeholder="Add a new comment"></input>
          <button id="postComment" type="submit" className="commentsContainer__button">COMMENT</button>
        </form>
      </div>
      {
        videoInfo[videoIndex].comments.map(comment => (
          <Comment className='commentsContainer__comment' key={comment.id} comment={comment} videoInfo={videoInfo} videoIndex={videoIndex}/>
        ))
      }
    </div>
  );

  }

export default CommentsContainer;