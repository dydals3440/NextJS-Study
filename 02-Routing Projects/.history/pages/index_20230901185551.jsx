import React from 'react';
import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/EventList';

function HomePage(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

// getServerSidePropss는불필요하게 과함, 모든 요청에 대해 사전생성하기 떄문, 이 떄 그냥 revalidate을 사용하는거다.
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
