import { useRouter } from 'next/router';

import { getAllEvents } from '../../helpers/api-util';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventsSearch';

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events: events;
    }
  };
}

export default AllEventsPage;
