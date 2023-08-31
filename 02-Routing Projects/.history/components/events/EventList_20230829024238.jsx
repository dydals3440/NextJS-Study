import EventItem from './EventItem';

function EventList(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((event) => (
        <EventItem id={event.id} title={event.title} />
      ))}
    </ul>
  );
}

export default EventList;
