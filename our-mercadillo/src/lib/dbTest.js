// src/lib/dbTest.js

const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
const path = require('path');

// Cargar variables de entorno desde el archivo .env en la raíz del proyecto
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
};

async function testDbConnection() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Conexión exitosa a la base de datos');
    // Consulta SQL
    //const sql_query = "SELECT COUNT(DISTINCT producto_tipo) AS unique_producto_tipos FROM Bodega";
    //const [rows] = await connection.query(sql_query);

    //console.log('Resultados de la consulta:');
    //console.log(rows);
    return connection;
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

// Llamar a la función directamente para probar la conexión
module.exports = testDbConnection;