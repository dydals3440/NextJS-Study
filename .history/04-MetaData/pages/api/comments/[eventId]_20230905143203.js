import { connectDatabase, insertDocument } from '../../../helpers/db-util';

// /comments/some-event-id (이렇게 라우팅해야 더알기 쉬움!)
async function handler(req, res) {
  // [eventId.js]이므로!
  const eventId = req.query.eventId;
  if (req.method === 'POST') {
    // add server-side validation
    const { email, name, text } = req.body;


    try {
            const client = await connectDatabase();
    }
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
    const result = await db.collection('comments').insertOne(newComment);
    console.log(result);
    req.status(201).json({ message: 'Added Comment.', comment: newComment });
  }
  if (req.method === 'GET') {
    const db = client.db();
    const documents = await db
      .collection('comments')
      .find()
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({ comments: documents });
  }
  client.close();
}

export default handler;
