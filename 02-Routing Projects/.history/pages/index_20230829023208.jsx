import React from 'react';
import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/EventList';

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents);
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
