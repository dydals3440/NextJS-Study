import Head from 'next/head';

import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';

function HomePage(props) {
  return (
    <div>
      {/* 대문자로 시작한다는 점을 명심! */}
      <Head>
        <title>NextJS Events</title>
        {/* 이 설명문은 content 속성에 추가, Google과 같은 검색 엔진에서 검색 결과를 출력할 때 같이 출력되는 설명문이 되기 떄문에 매우 중요! */}
        <meta
          name='description'
          content='find a lot of great events that allow you to evolve...'
        />
      </Head>
      \ <NewsletterRegistration />
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
