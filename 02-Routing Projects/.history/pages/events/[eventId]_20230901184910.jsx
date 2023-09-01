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
  // eventID를 동적으로 받아오기위해서, 전체 정보를 받아와야함.
  // 아이디를 추출하고, 생성해야하는 경로를 그 ID에서 얻어야함!
  const events = await getAllEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    // 아직 생성하지 않은 가능한, eventId 값이 더 있는지 Next.js가 알 수있음. 다시 말해 페이지를 동적으로 생성해야하는지 혹은 가능한 경로를 모두 지정했는지.
    fallback: true,
  };
}

export default EventDetailPage;
