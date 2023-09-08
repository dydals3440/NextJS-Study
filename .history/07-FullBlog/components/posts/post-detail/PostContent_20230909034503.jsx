import PostHeader from './PostHeader';

const DUMMY_POST = {
  slug: 'getting-started-with-nextjs',
  title: 'Getting Started With-nextjs',
  image: 'getting-started-nextjs.png',
  date: '2022-02-10',
  content: '# This is a first post',
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}`;
  return (
    <article>
      <PostHeader title='' image='' />
      CONTENT
    </article>
  );
}

export default PostContent;