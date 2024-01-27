// pages/api/data.js
import Cors from 'cors';
import { connectToDatabase } from '../../mongoclient';

// Initializing the cors middleware
const cors = Cors({
  methods: ['POST', 'HEAD'], // Adjust the methods as per your requirements
  origin: true, // Reflect the request origin, or set to true to allow any origin
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  // Rest of the API logic
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const db = await connectToDatabase();
    const collection = db.collection('Dexscreener');
    const data = req.body;
    await collection.insertOne(data);
    res.status(200).json({ message: 'Data saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
