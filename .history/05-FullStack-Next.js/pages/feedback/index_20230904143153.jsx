import { buildFeedbackPath, extractFeedback } from '../api/feedback';

function FeedbackPage(props) {
  function loadFeedbackHandler(id) {
    // /api/some-feedback-id
    fetch(`/api/${id}`);
  }
  return (
    <ul>
      {props.feedbackItems.map((item) => {
        return (
          <li key={item.id}>
            {item.text}
            {/* .bind()는 이 함수를 미리 구성하게 해줌. 함수가 아직 실행되지는 않고 나중에 실행을 위해 구성을 미리함, 예를 들면, 위의 loadFeedback 함수에서 수신될 매개변수의 값을 미리 구성하는 것 이다. */}
            {/* bind 첫번쨰 인수는 함수 내부의 키워드 값(not care: null), bind에 전달할 두 번째 값은 해당함수에서 수신한 첫번쨰 인수, 첫번째 매개변수 값이 된다. item.id*/}
            <button onClick={loadFeedbackHandler(id)}>Show Details</button>
          </li>
        );
      })}
    </ul>
  );
}

export async function getStaticProps() {
  // getStaticProps, getServerSideProps에 자체 API를 사용할 떄는 fetch 함수를 사용하면 안된다! (firebase 같은 것은 가능!)
  // 자체 서버에 있는 파일에 접근할떄는 그냥 Node.js 로직사용!
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;
