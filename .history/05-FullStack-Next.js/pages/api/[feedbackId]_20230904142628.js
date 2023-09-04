import { buildFeedbackPath, extractFeedback } from './feedback';

// Dynamic Path Segments
function handler(req, res) {
  // 지금은 어떤식으로 해도 선택도니 피드백의 정보만 반환해주어야 하므로, feedback.id 할 필용 ㅓㅂㅅ음!
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
