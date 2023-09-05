import { MongoClient } from 'mongodb';

// /comments/some-event-id (이렇게 라우팅해야 더알기 쉬움!)
async function handler(req, res) {
  // [eventId.js]이므로!
  const eventId = req.query.eventId;
  if (req.method === 'POST') {
    // add server-side validation
    const { email, name, text } = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://dydals3440:AhaogAjhJeHUQyLI@cluster0.ywh3gdd.mongodb.net/events'
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
      // 몽고디비 자체적으로 Id 생성
      email,
      name,
      text,
      eventId,
    };
    const db = client.db();
    // MongoDB는 알아서 ID를 생성해줌!
    db.collection('comments').insertOne(newComment);
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
  client.close();
}

export default handler;
