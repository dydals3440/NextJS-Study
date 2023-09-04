// localhost:3000/api/feedback
function handler(req, res) {}

export default handler;

// 여기에 추가한 코드는 client 측에 도달하지 않음. 서버사이드 코드라는게 매우 중요!
//   웹 페이지에 방문한 사람들에게 보이지 않음 getStaticProps/getServerSideProps 같은 함수의 존재를 방문자들이 몰랐듯이 말이다. API Route도 마찬가지
