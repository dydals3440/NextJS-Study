import fs from 'fs';
import path from 'path';

// 코드 중복을 막기 위해, helper function을 만듬
function buildFeedbackPath() {
return path.join(process.cwd(), 'data', 'feedback.json');
}


// localhost:3000/api/feedback
function handler(req, res) {
  // 받은 성공적인 요청에 포함된 JSON 데이터를 반환! (API 표준 방식)
  //   json 메서드이용하면 js 값을 객체로 취급해 자동으로 JSON 형식으로 변환!
  if (req.method === 'POST') {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText,
    };
    // API Route에 Server Side 코드 추가!
    // store that in a DB or in a file (일단은 Data folder 만들어서 관리!)
    // 파일을 읽은 후 => 해당 파일에 있는 데이터 fetch => Update Data로 OverRide
    const filePath = 
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: 'Success!', feedback: newFeedback });
  } else {
    res.status(200).json({ message: 'This works!' });
  }
}

export default handler;

// 여기에 추가한 코드는 client 측에 도달하지 않음. 서버사이드 코드라는게 매우 중요!
//   웹 페이지에 방문한 사람들에게 보이지 않음 getStaticProps/getServerSideProps 같은 함수의 존재를 방문자들이 몰랐듯이 말이다. API Route도 마찬가지
