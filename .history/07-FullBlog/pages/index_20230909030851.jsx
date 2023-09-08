import { Fragment } from 'react';
import Hero from '../components/HomePage/Hero';
import FeaturedPosts from '../components/HomePage/FeaturedPosts';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started With-nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is a React Framework for Production',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started With-nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is a React Framework for Production',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started With-nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is a React Framework for Production',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started With-nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is a React Framework for Production',
    date: '2022-02-10',
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
