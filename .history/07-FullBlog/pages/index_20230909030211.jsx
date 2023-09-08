import { Fragment } from 'react';
import Hero from '../components/HomePage/Hero';
import FeaturedPosts from '../components/HomePage/FeaturedPosts';

const DUMMY_POSTS = [
  {
    slug: 'getting Started',
    title: 'Getting Started With-nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is a React Framework for Production',
    date: 'gd',
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
