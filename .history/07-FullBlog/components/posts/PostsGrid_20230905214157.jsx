import Post from './Post';

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
