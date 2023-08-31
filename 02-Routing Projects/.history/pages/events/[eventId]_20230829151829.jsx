import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import { Fragment } from 'react';

function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  // Did'nt find Event
  if (!event) {
    return <p>No Event Find</p>;
  }

  return <Fragment></Fragment>;
}

export default EventDetailPage;
