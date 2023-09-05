import {
  connectDatabase,
  getAllDocuments,
  insertDocument,
} from '../../../helpers/db-util';

// /comments/some-event-id (이렇게 라우팅해야 더알기 쉬움!)
async function handler(req, res) {
  // [eventId.js]이므로!
  const eventId = req.query.eventId;
  if (req.method === 'POST') {
    // add server-side validation
    const { email, name, text } = req.body;

    let client;
    try {
      client = await connectDatabase();
    } catch (err) {
      res.status(500).json({ message: 'Connecting to the DB failed' });
      return;
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

    let result;
    try {
      result = await insertDocument(client, 'comments', newComment);
      res.status(201).json({ message: 'Added Comment.', comment: newComment });
    } catch (err) {
      res.status(500).json({ message: 'Inserting comment failed!' });
    }

    newComment._id = result.insertedId;
  }
  if (req.method === 'GET') {
    try {
      const documents = await getAllDocuments(client, 'comments', {
        _id: -1,
      });

      res.status(200).json({ comments: documents });
    } catch (err) {
      res.status(500).json({ message: 'Getting Comment failed' });
    }
  }
  client.close();
}

export default handler;