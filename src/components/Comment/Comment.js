import './Comment.scss';


function Comment() {
  // const epoch = comment.timestamp;
  // const date = new Date(epoch).toLocaleDateString("en-US")

  return (
    <div className="comment">
      <img className="comment__avatar-plceholder"></img>
      <div className="comment__info">
        <p className="comment__name"></p>
        <p className="comment__date"></p>
      </div>
      <p className="comment__text"></p>
    </div>
  );

}

export default Comment;