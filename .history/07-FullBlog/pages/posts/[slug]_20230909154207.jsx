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

export default PostDetailPage;

// 1) Hero (환영 섹션 주요 상품 소개, 블로그 스스로 소개)
// 2) Featured Posts
