import { MongoClient } from 'mongodb';

// /comments/some-event-id (이렇게 라우팅해야 더알기 쉬움!)
function handler(req, res) {
  // [eventId.js]이므로!
  const eventId = req.query.eventId;
  if (req.method === 'POST') {
    // add server-side validation
    const { email, name, text } = req.body;

    MongoClient.connect(
      'mongodb+srv://dydals3440:AhaogAjhJeHUQyLI@cluster0.ywh3gdd.mongodb.net/'
    );
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
    const dummyList = [
      { id: 'c1', name: 'Max', comment: '하잉ㅎㅎㅎ' },
      { id: 'c2', name: 'Mix', comment: 'ㅋㅋㅋㅋ왜웃음' },
    ];
    res.status(200).json({ comments: dummyList });
  }
}
