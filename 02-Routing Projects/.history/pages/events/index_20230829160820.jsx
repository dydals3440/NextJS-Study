import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventsSearch';

function AllEventsPage() {
  const events = getAllEvents();

  function findEventsHandler() {}
  return (
    <>
      <EventSearch />
      <EventList items={events} />
    </>
  );
}

export default AllEventsPage;
