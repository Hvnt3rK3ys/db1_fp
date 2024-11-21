// src/config/dbTest.js
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306, // Añadir el puerto aquí
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

module.exports = testDbConnection; // Exportar la función para usarla en otros archivos