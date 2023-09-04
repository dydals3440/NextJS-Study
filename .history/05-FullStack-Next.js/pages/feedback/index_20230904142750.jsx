import { buildFeedbackPath, extractFeedback } from '../api/feedback';

function FeedbackPage(props) {
  function loadFeedbackHandler() {}
  return (
    <ul>
      {props.feedbackItems.map((item) => {
        return <li key={item.id}>{item.text}</li>;
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
