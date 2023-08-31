import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventsSearch';

function AllEventsPage() {
  const events = getAllEvents();

  function findEventsHandler(year, month) {}
  return (
    <>
      <EventSearch onSerch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export default AllEventsPage;
