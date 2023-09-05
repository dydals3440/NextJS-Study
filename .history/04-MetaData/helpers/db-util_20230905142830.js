export async function connectDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://dydals3440:Pe5YMmGdzuhgcQKf@cluster0.ywh3gdd.mongodb.net/events'
  );
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  await db.collection(collection).insertOne(document);
}
