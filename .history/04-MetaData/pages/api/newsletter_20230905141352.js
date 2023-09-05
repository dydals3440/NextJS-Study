import { MongoClient } from 'mongodb';

async function connectDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://dydals3440:Pe5YMmGdzuhgcQKf@cluster0.ywh3gdd.mongodb.net/events'
  );
  return client;
}

async function insertDocument(client, document) {
  const db = client.db();
  await db.collection('newsletter').insertOne({ email: userEmail });
}

async function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;
    // validation (프론트엔드 코드는, 사용자에게 유출되어있으므로 조작될 가능성이있음, 유효성 검사에만 의존하면안됨! 프론트는 그저 사용자에게 편함을 제공하는것, 확실하게 유효성 검사를 할려면 API 라우트에서 수행해야함! 이 코드는 사용자가 열람하거나 수정할 수 없음!)
    if (!userEmail || !userEmail.includes('@')) {
      // 사용자 입력값이 유효 X
      res.status(422).json({ message: 'Invalid email address.' });
      return;
    }
    const client = connectDatabase();
    insertDocument(client, { email: userEmail });

    // 클라이언트로 부터의 연결 끊음!
    client.close();
    res.status(201).json({ message: 'Signed Up' });
  }
}

export default handler;
