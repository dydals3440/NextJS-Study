import Link from 'next/link';
import classes from './Post.module.css';

function Post(props) {
  const { title, image, excerpt, date, slug } = props.post;
  const formattedDate = new Date(date).toLocaleDateString('ko-KR', {
    day: 'numeric',
    month: 'long', // 1=> January
    year: 'numeric',
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <li className={classes.post}>
      {/* 링크태그에 a태그가 왜 필요할까요? */}
      <Link>
        <a>
          <div className={classes.image}>
            <Image src={imagePath} alt={title} width={300} height={200} />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default Post;
