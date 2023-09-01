export async function getAllEvents() {
  // async가 있으므로 await을 사용하면 .then을 사용하지않고 response를 받을 수 있음
  const response = await fetch(
    'https://react-http-28b62-default-rtdb.asia-southeast1.firebasedatabase.app/events.json'
  );
  const data = await response.json();
  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}
