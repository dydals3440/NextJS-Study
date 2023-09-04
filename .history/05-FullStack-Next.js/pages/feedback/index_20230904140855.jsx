function FeedbackPage(props) {
  return (
    <ul>
      {props.feedbackItems.map((item) => {
        <li key={item.id}>{item.text}</li>;
      })}
    </ul>
  );
}

export async function getStaticProps() {
  // getStaticProps, getServerSideProps에 자체 API를 사용할 떄는 fetch 함수를 사용하면 안된다! (firebase 같은 것은 가능!)
}

export default FeedbackPage;
