// 만약에 파일 명을 [...fedbackId].js라고하면, /api/some-value/more-segments 범위의 라우팅까지 커버됨!
import { buildFeedbackPath, extractFeedback } from './feedback';

// Dynamic Path Segments
function handler(req, res) {
  // 지금은 어떤식으로 해도 선택도니 피드백의 정보만 반환해주어야 하므로, req.method === 'REST_API'를 굳이 해줄필요없음!
  // feedbackId => fileName
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);
  const selectedFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );
  res.status(200).json({ feedback: selectedFeedback });
}

export default handler;
