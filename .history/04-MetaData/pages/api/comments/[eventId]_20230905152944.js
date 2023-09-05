import {
  connectDatabase,
  getAllDocuments,
  insertDocument,
} from '../../../helpers/db-util';

// /comments/some-event-id (이렇게 라우팅해야 더알기 쉬움!)
async function handler(req, res) {
  // [eventId.js]이므로!
  const eventId = req.query.eventId;
  let client;
  try {
    client = await connectDatabase();
  } catch (err) {
    // 입력값이 잘못될경우는 client.close()를 해주나, DB 연결이 잘못될떄는 연결을 닫으면 안된다. 연결실패 설정이 있기 때문에 return으로 반환!
    res.status(500).json({ message: 'Connecting to the DB failed' });
    return;
  }

  if (req.method === 'POST') {
    const { email, name, text } = req.body;
    if (
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      client.close();
      return;
    }

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
      newComment._id = result.insertedId;
      res.status(201).json({ message: 'Added Comment.', comment: newComment });
    } catch (err) {
      res.status(500).json({ message: 'Inserting comment failed!' });
    }
  }
  if (req.method === 'GET') {
    try {
      const documents = await getAllDocuments(
        client,
        'comments',
        { _id: -1 },
        { eventId: eventId }
      );

      res.status(200).json({ comments: documents });
    } catch (err) {
      res.status(500).json({ message: 'Getting Comment failed' });
    }
  }
  client.close();
}

export default handler;
