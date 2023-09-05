import Post from './Post';
import classes from './PostsGrid.module.css';

function PostsGrid(props) {
  const { posts } = props;
  return (
    <ul>
      {posts.map((post) => (
        <Post />
      ))}
    </ul>
  );
}

export default PostsGrid;
