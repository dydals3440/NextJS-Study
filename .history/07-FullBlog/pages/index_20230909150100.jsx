import { Fragment } from 'react';
import Hero from '../components/HomePage/Hero';
import FeaturedPosts from '../components/HomePage/FeaturedPosts';

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;

// useEffect를 통해, 데이터를 생성하면 사전 렌더링된 페이지에 아무런 콘텐츠가 들어가지 않음! 검색엔진에 잘 잡히지 않음. 그리고 지금 문제는 API가 없이, 파일시스템으로부터 모든 블로그 포스트들을 가져오고있음.
