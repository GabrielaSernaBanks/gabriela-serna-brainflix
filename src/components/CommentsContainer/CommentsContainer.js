import Comment from '../Comment/Comment';
import './CommentsContainer.scss'

function CommentsContainer({videoInfo, videoIndex}) {
  const commentCount = videoInfo[videoIndex].comments.length
  

  return (

    <div>
      <h1> {commentCount} Comments</h1>
      {
        videoInfo[videoIndex].comments.map(comment => (
          <Comment key={comment.id} comment={comment} videoInfo={videoInfo} videoIndex={videoIndex}/>

        ))
      }
    </div>
  );

  }



 


export default CommentsContainer;