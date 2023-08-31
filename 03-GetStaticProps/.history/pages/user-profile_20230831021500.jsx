// 어떤 사용자가 렌더링하는지 먼저 파악(쿠키를 이용해서)
// 유저에 따라, 보여지는 페이지가 달라짐! 이경우가 SSR이다.
// 이 경우 프로젝트가 생성하기 전에, 불러오는게아니라, 요청이 들어올 떄마다 불러오는거임
function UserProfilePage(props) {
  return <h1>{props.username}</h1>;
}

export default UserProfilePage;

// 이 함수는 사전에 생성된 정적함수가 아니고, 배포된 서버와 개발 서버에서만 실행된다는 점이 중요하다!
export async function getServerSideProps(context) {
  const { params, req, res } = context;

  // revalidate 뺴고 나머지 다 쓸수있음 왜냐하면, SSR에서는 들어오는 요청에 전부 유효성 검사를 실행하기 떄문 (지정해준 시간마다 최신 페이지 정보가 갱신되는게 아님!)
  return {
    props: {
      username: 'abc',
    },
  };
}

// getServerSideProps와 context
// getStaticProps의 context와 다르게,  매개변수 (params) 객체나 덜 중요한 부분에 접근하는 것이아닌, 실제 요청 (req)에 접근이 가능해진다. 응답 (res)에도 접근하여 해당 요청을 조정하거나, 헤더도 추가할 수 있다. 정확히 말하자면 context 객체에 든 여러 value/key를 얻을 수 있고, req/res는 적절한 응답을 얻을때까지, 필요한 만큼 req 객체를 조정할 수도있다. 요청이 가기 전에 조정하는 방법도 있다. 예를 들어, 헤더를 추가 또는 쿠키를 추가하는 것과같은 것이다. 서버에 도달한 요청 객체를 분석해서 거기서 들어오는 데이터를 읽을 수있다. 해당 요청에 달린 헤더나 쿠키 데이터 같은 것이다. 지금 받을 요청 객체와 응답객체는 공식 Node.js 기본 입력메시지와 응답객체이다.
