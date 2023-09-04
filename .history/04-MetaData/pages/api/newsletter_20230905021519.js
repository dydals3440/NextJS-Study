function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;
    // validation
    if (!userEmail || !userEmail.includes('@'))
  }
}

export default handler;
