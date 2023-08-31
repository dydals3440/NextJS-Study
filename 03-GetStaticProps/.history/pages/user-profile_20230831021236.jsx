// 어떤 사용자가 렌더링하는지 먼저 파악(쿠키를 이용해서)
// 유저에 따라, 보여지는 페이지가 달라짐! 이경우가 SSR이다.
// 이 경우 프로젝트가 생성하기 전에, 불러오는게아니라, 요청이 들어올 떄마다 불러오는거임
function UserProfilePage(props) {
  return <h1>{props.username}</h1>;
}

export default UserProfilePage;

// 이 함수는 사전에 생성된 정적함수가 아니고, 배포된 서버와 개발 서버에서만 실행된다는 점이 중요하다!
export async function getServerSideProps(context) {
  const { params } = context;
  // revalidate 뺴고 나머지 다 쓸수있음 왜냐하면, SSR에서는 들어오는 요청에 전부 유효성 검사를 실행하기 떄문 (지정해준 시간마다 최신 페이지 정보가 갱신되는게 아님!)
  return {
    props: {
      username: 'abc',
    },
  };
}

// getServerSideProps와 context
// getStaticProps의 context와 다르게,  매개변수 (params) 객체나 덜 중요한 부분에 접근하는 것이아닌, 실제 요청 (req)에 접근이 가능해진다. 응답 (res)에도 접근하여 해당 요청을 조정하거나, 헤더도 추가할 수 있다. 정확히 말하자면 context 객체에 든 여러 value/key를 얻을 수 있고,
