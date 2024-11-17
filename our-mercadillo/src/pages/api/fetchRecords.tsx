// pages/api/fetchRecords.js
import { connectDb } from '../../config/db';

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const connection = await connectDb();
      const [rows]: any = await connection.execute('SELECT * FROM Bodega LIMIT 5');
      await connection.end();
      res.status(200).json(Array.isArray(rows) ? rows : []); 
    } catch (error) {
      res.status(500).json({ error: 'Error fetching records' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}