const testDbConnection = require('../../../lib/dbTest');

async function executeQuery(param, someField) {
  let connection = null;
  try {
    connection = await testDbConnection();
    console.log('Route si funciona');

    // Usar param y someField en la consulta SQL
    const sql_query = `
      SELECT COUNT(DISTINCT producto_tipo) AS unique_producto_tipos FROM Bodega
    `;
    const [rows] = await connection.query(sql_query, [param, someField]);

    return { success: true, unique_producto_tipos: rows[0].unique_producto_tipos };
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    return { success: false, error: 'Error fetching data' };
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

async function handler(req) {
  // Acceder a los parámetros de consulta
  const { searchParams } = new URL(req.url);
  const param = searchParams.get('param');

  // Acceder al cuerpo de la solicitud
  const body = await req.json();

  return executeQuery(param, body.someField);
}

module.exports = { handler, executeQuery };