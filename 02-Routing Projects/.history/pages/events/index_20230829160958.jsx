import { useRouter } from 'next/router';

import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventsSearch';

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    router.push();
  }
  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export default AllEventsPage;
