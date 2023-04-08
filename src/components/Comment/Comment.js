

function Comment({comment}) {
  const epoch = comment.timestamp;
  const date = new Date(epoch).toLocaleDateString("en-US")

  return (
    <div>
      <p>{comment.name}</p>
      <p>{date}</p>
      <p>{comment.comment}</p>
    </div>
  );

}

export default Comment;