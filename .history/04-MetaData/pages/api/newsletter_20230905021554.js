function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;
    // validation (프론트엔드 코드는, 사용자에게 유출되어있으므로 조작될 가능성이있음, 유효성 검사에만 의존하면안됨!)
    if (!userEmail || !userEmail.includes('@')) {
    }
  }
}

export default handler;
