import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';

function AllEventsPage() {
  const events = getAllEvents();
  return (
    <div>
      <h1>eventsPage</h1>
    </div>
  );
}

export default AllEventsPage;
