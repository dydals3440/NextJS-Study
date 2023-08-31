import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';

function AllEventsPage() {
  const events = getAllEvents();
  return (
    <>
      <EventsSearch />
      <EventList items={events} />
    </>
  );
}

export default AllEventsPage;
