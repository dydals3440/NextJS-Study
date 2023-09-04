import { buildFeedbackPath, extractFeedback } from './feedback';

// Dynamic Path Segments
function handler(req, res) {
  if (req.method === 'POST') {
    //
  }
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
