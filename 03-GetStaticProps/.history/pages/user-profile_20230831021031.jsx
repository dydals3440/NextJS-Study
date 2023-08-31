// 어떤 사용자가 렌더링하는지 먼저 파악(쿠키를 이용해서)
// 유저에 따라, 보여지는 페이지가 달라짐! 이경우가 SSR이다.
// 이 경우 프로젝트가 생성하기 전에, 불러오는게아니라, 요청이 들어올 떄마다 불러오는거임
function UserProfilePage(props) {
  return <h1>{props.username}</h1>;
}

export default UserProfilePage;

export async function getServerSideProps(context) {
  // revalidate 뺴고 나머지 다 쓸수있음 왜냐하면, SSR에서는 들어오는 요청에 전부 유효성 검사를 실행하기 떄문 (지정해준 시간마다 최신 페이지 정보가 갱신되는게 아님!)
  return {
    props: {
      username: 'abc',
    },
  };
}
