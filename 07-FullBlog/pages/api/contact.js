// => /api/contact
// 서버사이드에서만 실행되는 코드
function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid Input.' });
      return;
    }
    // Store it in a DB
    const newMessage = {
      email,
      name,
      message,
    };
    console.log(newMessage);
    res
      .status(201)
      .json({ message: 'Successfully stored message!', message: newMessage });
  }
}

export default handler;
