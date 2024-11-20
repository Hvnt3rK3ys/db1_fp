import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

interface DbConfig {
  host: string;
  user: string;
  password: string;
  database: string;
  port?: number;
}

const dbConfig: DbConfig = {
  host: process.env.DB_HOST as string,
  user: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_NAME as string,
  port: (process.env.DB_PORT || 3306) as number, // Añadir el puerto aquí
};

async function testDbConnection() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Conexión exitosa a la base de datos');
    await connection.end();
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

testDbConnection();