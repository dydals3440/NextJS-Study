async function connectDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://dydals3440:Pe5YMmGdzuhgcQKf@cluster0.ywh3gdd.mongodb.net/events'
  );
  return client;
}

async function insertDocument(client, document) {
  const db = client.db();
  await db.collection('newsletter').insertOne(document);
}