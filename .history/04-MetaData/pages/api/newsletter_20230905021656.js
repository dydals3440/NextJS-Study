function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;
    // validation (프론트엔드 코드는, 사용자에게 유출되어있으므로 조작될 가능성이있음, 유효성 검사에만 의존하면안됨! 프론트는 그저 사용자에게 편함을 제공하는것, 확실하게 유효성 검사를 할려면 API 라우트에서 수행해야함!)
    if (!userEmail || !userEmail.includes('@')) {
    }
  }
}

export default handler;
