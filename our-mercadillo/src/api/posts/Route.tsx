import { NextApiRequest, NextApiResponse } from 'next';
import testDbConnection from '@/lib/dbTest'; // Asegúrate de que la ruta sea correcta

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const connection = await testDbConnection(); // Obtener la conexión a la base de datos
      const sql_query = "SELECT COUNT(DISTINCT producto_tipo) AS unique_producto_tipos FROM Bodega";
      const [rows] = await connection.query(sql_query); // Ejecutar la consulta
      await connection.end(); // Cerrar la conexión después de la consulta
      res.status(200).json({ unique_producto_tipos: rows[0].unique_producto_tipos }); // Devolver los resultados como JSON
    } catch (error) {
      res.status(500).json({ error: 'Error fetching data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
