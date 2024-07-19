// pages/api/prices.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req, res) {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    const [rows] = await connection.execute('SELECT * FROM Prices ORDER BY timestamp DESC LIMIT 20');
    await connection.end();

    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: error.message });
  }
}