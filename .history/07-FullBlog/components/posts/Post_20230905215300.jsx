import Link from 'next/link';
import classes from './Post.module.css';

function Post(props) {
  const { title, image, excerpt, date, slug } = props.post;
  const formattedDate = new Date(date).toLocaleDateString('ko-KR');

  return (
    <li className={classes.post}>
      {/* 링크태그에 a태그가 왜 필요할까요? */}
      <Link>
        <a>
          <div className={classes.image}>
            <Image />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>July 14th 2023</time>
            <p>The excerpt</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default Post;
