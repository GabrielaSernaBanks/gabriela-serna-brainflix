import './Comment.scss';

function Comment({ userComment }) {
	const epoch = userComment.timestamp;
	const date = new Date(epoch).toLocaleDateString("en-US")

	return (
		<div className="comment">
			<img className="comment__avatar-plceholder"></img>
			<div className="comment__info">
				<p className="comment__name">{userComment.name}</p>
				<p className="comment__date">{date}</p>
			</div>
			<p className="comment__text">{userComment.comment}</p>
		</div>
	);
}

export default Comment;