import React from 'react';
import { getFeaturedEvents } from '../dummy-data';

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents);
  return (
    <div>
      <EventList />
    </div>
  );
}

export default HomePage;
