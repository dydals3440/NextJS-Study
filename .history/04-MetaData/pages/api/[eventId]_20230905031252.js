// /comments/some-event-id (이렇게 라우팅해야 더알기 쉬움!)
function handler(req, res) {
  // [eventId.js]이므로!
  const eventId = req.query.eventId;
  if (req.method === 'POST') {
    // add server-side validation
    const { email, name, text } = req.body;
    if (
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }
    console.log(email, name, text);
    const newComment = {
      // 원래는 uuid 사용
      id: newDate().toISOString(),
      email,
      name,
      text,
    };
    console.log(newComment);
    req.status(201).json({ message: 'Added Comment.', comment: newComment });
  }
  if (req.method === 'GET') {
    const dummyList = [{ id: 'c1', name: 'Max', comment: '123' }];
  }
}
