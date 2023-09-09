import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

import PostHeader from './PostHeader';
import classes from './PostContent.module.css';

function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  console.log(post.slug);

  const customComponents = {
    image(image) {
      return (
        <Image
          src={`/images/posts/${post.slug}/${image.properties.src}`}
          alt={image.alt}
          height={300}
          width={600}
        />
      );
    },
    paragraph(paragraph) {
      const { node } = paragraph;
      if (node.children[0].type === 'image') {
        const image = node.children[0];
      }
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
