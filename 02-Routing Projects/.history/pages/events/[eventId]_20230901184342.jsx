import { useRouter } from 'next/router';
import { getEventById, getAllEvents } from '../../helpers/api-util';
import { Fragment } from 'react';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

function EventDetailPage(props) {
  // 여기서, 컴포넌트 함수 내부에서 이벤트 아이디를 사용할 일 없음!
  // const router = useRouter();
  // const eventId = router.query.eventId;
  const event = props.selectedEvent;

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
  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
  };
}

// 어떤 EventId에 대해 프리렌더링할지 선택
export async function getStaticPaths() {
  const events = await getAllEvents();
  return {
    paths: [
      {
        params: {
          eventId: 'e1',
        },
      },
    ],
  };
}

export default EventDetailPage;
