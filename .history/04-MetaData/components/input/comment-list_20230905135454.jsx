import classes from './comment-list.module.css';

function CommentList() {
  const { items } = props;
  return (
    <ul className={classes.comments}>
      {items.map((item) => (
        <li key={item.id}></li>
      ))}
    </ul>
  );
}

export default CommentList;
