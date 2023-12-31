import { connectDatabase, insertDocument } from '../../helpers/db-util';

async function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;
    // validation (프론트엔드 코드는, 사용자에게 유출되어있으므로 조작될 가능성이있음, 유효성 검사에만 의존하면안됨! 프론트는 그저 사용자에게 편함을 제공하는것, 확실하게 유효성 검사를 할려면 API 라우트에서 수행해야함! 이 코드는 사용자가 열람하거나 수정할 수 없음!)
    if (!userEmail || !userEmail.includes('@')) {
      // 사용자 입력값이 유효 X
      res.status(422).json({ message: 'Invalid email address.' });
      return;
    }

    let client;

    try {
      client = await connectDatabase();
    } catch (err) {
      res.status(500).json({ message: 'Connecting to the DataBase Failed' });
      // 아래 함수가 더 실행되는 것을 방지함
      return;
    }

    try {
      await insertDocument(client, 'newsletter', { email: userEmail });
      client.close();
      // Success
      res.status(201).json({ message: 'Signed Up' });
    } catch (err) {
      res.status(500).json({ message: 'Inserting Data Failed' });
      return;
    }
  }
}

export default handler;
