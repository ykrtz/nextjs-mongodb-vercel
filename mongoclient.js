// mongodb.js
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

export async function connectToDatabase() {
  await client.connect();
  return client.db('Dexscreener'); // Specify the database name here
}
