import classes from './AllPosts.module.css';

function AllPosts(props) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid />
    </section>
  );
}

export default AllPosts;
