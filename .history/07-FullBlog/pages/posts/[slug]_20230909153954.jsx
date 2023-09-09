import PostContent from '../../components/posts/post-detail/PostContent';

// /posts/getting-started-with-next-js (slug)
function PostDetailPage() {
  return <PostContent />;
}

export function getStaticProps(context) {}

export default PostDetailPage;

// 1) Hero (환영 섹션 주요 상품 소개, 블로그 스스로 소개)
// 2) Featured Posts
