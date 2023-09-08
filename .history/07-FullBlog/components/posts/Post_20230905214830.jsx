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
          <div></div>
        </a>
      </Link>
    </li>
  );
}

export default Post;
