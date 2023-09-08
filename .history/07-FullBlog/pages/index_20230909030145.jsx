import { Fragment } from 'react';
import Hero from '../components/HomePage/Hero';
import FeaturedPosts from '../components/HomePage/FeaturedPosts';

const DUMMY_POSTS = [
  {
    slug: 'getting Started',
    title: 'Getting Started With-nextjs',
    image,
    excerpt,
    date,
  },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
