import './Comment.scss';


function Comment({comment}) {
  const epoch = comment.timestamp;
  const date = new Date(epoch).toLocaleDateString("en-US")

  return (
    <div className="comment">
      <img className="comment__avatar-plceholder"></img>
      <div className="comment__info">
        <p className="comment__name">{comment.name}</p>
        <p className="comment__date">{date}</p>
      </div>

      <p className="comment__text">{comment.comment}</p>
    </div>
  );

}

export default Comment;