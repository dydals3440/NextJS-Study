import AllPosts from '../../components/posts/AllPosts';
import { getAllPosts } from '../../lib/PostsUtil';

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

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
    revalidate: 60,
  };
}

export default AllPostsPage;
