import classes from './comment-list.module.css';

function CommentList() {
  const { itmes } = props;
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      <li key={item._id}>
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li>
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li>
    </ul>
  );
}

export default CommentList;
