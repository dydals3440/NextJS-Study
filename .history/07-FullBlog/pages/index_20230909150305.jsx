import { Fragment } from 'react';
import Hero from '../components/HomePage/Hero';
import FeaturedPosts from '../components/HomePage/FeaturedPosts';
import { getFeaturedPosts } from '../lib/PostsUtil';

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;

// useEffect를 통해, 데이터를 생성하면 사전 렌더링된 페이지에 아무런 콘텐츠가 들어가지 않음! 검색엔진에 잘 잡히지 않음. 그리고 지금 문제는 API가 없이, 파일시스템으로부터 모든 블로그 포스트들을 가져오고있음.
//  서버 사이드에서 실행되며 파일 시스템에 대한 엑세스가 있는 경우는 어떤 코드든 사용해서 구현할 수가 있으나, 컴포넌트 내에서는 불가능. 파일시스템에 대한 엑세스가 없음, 또한 해당 엑세스를 승이ㄴ해달라는 요청을 API에 보낼수없음. 아무런 API가 없으므로, API라우트를 구축할수있지만, 사전렌더링 없이 데이터를 가져올 수 있겠지만 그러면, 검색 엔진 최적화의 단점은 여전히 존재, 가장 합리적인 방법은, getStaticProps함수를 따로 추가해주는 것!
