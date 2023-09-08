import Post from './Post';
import classes from './PostsGrid.module.css';

function PostsGrid(props) {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;
