import PostHeader from './PostHeader';

const DUMMY_POST = {
  slug: 'getting-started-with-nextjs',
  title: 'Getting Started With-nextjs',
  image: 'getting-started-nextjs.png',

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
