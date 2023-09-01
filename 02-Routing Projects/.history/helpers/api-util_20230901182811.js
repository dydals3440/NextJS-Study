export async function getAllEvents() {
  fetch(
    'https://react-http-28b62-default-rtdb.asia-southeast1.firebasedatabase.app/events.json'
  );
}

export async function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}
