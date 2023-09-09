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
  // 미리 생성하지 않고, paths 값으로 빈 배열만 넣을 수 있다. fallback을 true 그리고 페이지에 방문할 떄마다 그때그떄 데이터를 준비하고 페칭, fallback:true이므로, 게시물이 없을떄, 렌더링될떄의 페이지를 만들어주어야함!
  // fallback: 'blocking'으로 설정해서 게시물이 나올떄까지 기다리게 할 수 도 있음!
  return {
    paths: [],
    fallback: true,
  };
}

export default PostDetailPage;

// 1) Hero (환영 섹션 주요 상품 소개, 블로그 스스로 소개)
// 2) Featured Posts
