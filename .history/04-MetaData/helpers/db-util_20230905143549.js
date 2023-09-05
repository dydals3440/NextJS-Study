import { MongoClient } from 'mongodb';

export async function connectDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://dydals3440:Pe5YMmGdzuhgcQKf@cluster0.ywh3gdd.mongodb.net/events'
  );
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();
  const documents = await db
    .collection('comments')
    .find()
    .sort({ _id: -1 })
    .toArray();
}
