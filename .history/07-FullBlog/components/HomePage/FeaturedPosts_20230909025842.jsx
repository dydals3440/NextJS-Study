import React from 'react';
import classes from './FeaturedPosts.module.css';
import PostsGrid from '../posts/PostsGrid';

export default function FeaturedPosts() {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid />
    </section>
  );
}
