import ReactMarkdown from 'react-markdown';

import PostHeader from './PostHeader';
import classes from './PostContent.module.css';

function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  console.log(post);
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
