import { Fragment } from 'react';
import Hero from '../components/HomePage/Hero';
import FeaturedPosts from '../components/HomePage/FeaturedPosts';

const DUMMY_POSTS = [];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={}/>
    </Fragment>
  );
}

export default HomePage;
