import PostHeader from './PostHeader';

const DUMMY_POST = {
  slug: 'getting-started-with-nextjs2',
  title: 'Getting Started With-nextjs',
  image: 'getting-started-nextjs.png',
  excerpt: 'NextJS is a React Framework for Production',
  date: '2022-02-10',
};

function PostContent() {
  return (
    <article>
      <PostHeader title='' image='' />
      CONTENT
    </article>
  );
}

export default PostContent;
