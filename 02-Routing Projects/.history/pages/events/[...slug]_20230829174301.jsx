import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/ResultsTitle';
import { Fragment } from 'react';
import Button from '../../components/ui/Button';

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
    return (
      <Fragment>
        <p>Invalid Filter, Please Adjust Your values</p>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <p>No Events found for the chosen filter!</p>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventsPage;
