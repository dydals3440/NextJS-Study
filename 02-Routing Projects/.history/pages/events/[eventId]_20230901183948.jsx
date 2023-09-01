import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import { Fragment } from 'react';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  // Did'nt find Event
  if (!event) {
    return (
      <ErrorAlert>
        <p>No Event Find</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

// 검색엔진을 생각하면, 무조건 크롤링할 수 있어야함. 페이지 처음부터 데이터가 있어야함 (사전렌더링이좋음) getStaticProps vs getServerSideProps 이런 페이지는 늘 변경되는 사용자 특정 데이터를 필요로 하는 페이지가 아니기 떄문에 GSP사용

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
}

export default EventDetailPage;
