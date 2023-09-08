import classes from './AllPosts.module.css';

function AllPosts() {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid />
    </section>
  );
}

export default AllPosts;
