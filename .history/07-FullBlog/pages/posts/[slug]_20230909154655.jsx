import PostContent from '../../components/posts/post-detail/PostContent';
import { getPostData } from '../../lib/PostsUtil';

// /posts/getting-started-with-next-js (slug)
function PostDetailPage(props) {
  return <PostContent post={props.post} />;
}

export function getStaticProps(context) {
  // params로 부터 slug 추출!
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

// Dynamic Page [slug] 페이지는 getStaticProps만으로 동작 X getStaticPaths와 짝을 맞추어야 동작가능!

export function getStaticPaths() {
  // 이 객체는미리 생성해야하는 모든 경로를 갖음
  return {
    paths: [],
    fallback: true,
  };
}

export default PostDetailPage;

// 1) Hero (환영 섹션 주요 상품 소개, 블로그 스스로 소개)
// 2) Featured Posts
