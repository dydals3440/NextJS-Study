import { MongoClient } from 'mongodb';

function handler(req, res) {
  const eventId = req.query.eventId;
  MongoClient.connect('');

  if (req.method === 'POST') {
    const { email, name, text } = req.body;
  }
}
