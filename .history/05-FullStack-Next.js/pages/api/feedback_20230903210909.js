// localhost:3000/api/feedback
function handler(req, res) {
  // 받은 성공적인 요청에 포함된 JSON 데이터를 반환! (API 표준 방식)
  //   json 메서드이용하면 js 값을 객체로 취급해 자동으로 JSON 형식으로 변환!
  res.status(200).json({ message: 'This works!' });
}

export default handler;

// 여기에 추가한 코드는 client 측에 도달하지 않음. 서버사이드 코드라는게 매우 중요!
//   웹 페이지에 방문한 사람들에게 보이지 않음 getStaticProps/getServerSideProps 같은 함수의 존재를 방문자들이 몰랐듯이 말이다. API Route도 마찬가지
