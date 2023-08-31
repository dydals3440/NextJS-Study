import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/ResultsTitle';

function FilteredEventsPage() {
  const router = useRouter();
  // 컴포넌트가 처음 렌더링될떄는, URL 데이터에 대한 엑세스가 없음.
  const filterData = router.query.slug;
  if (!filterData) {
    return <p className='center'>Loading...</p>;
  }
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  // String -> Number
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  // Filter Error
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2022 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid Filter, Please Adjust Your values</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No Events found for the chosen filter!</p>;
  }

  return (
    <Fragment>
      <ResultsTitle />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventsPage;
