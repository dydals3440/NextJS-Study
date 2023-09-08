import Link from 'next/link';

function Post() {
  return (
    <li>
      {/* 링크태그에 a태그가 왜 필요할까요? */}
      <Link>
        <a>
          <div>
            <Image />
          </div>
          <div>
            <h3>TITLE</h3>
            <time>July 14th 2023</time>
            <p>The excerpt</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default Post;
