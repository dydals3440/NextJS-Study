import { buildFeedbackPath, extractFeedback } from './feedback';

// Dynamic Path Segments
function handler(req, res) {
  // feedbackId => fileName
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);
}

export default handler;
