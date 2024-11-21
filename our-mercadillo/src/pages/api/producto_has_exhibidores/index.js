import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET': // Obtener todas las relaciones o una específica
      try {
        const { idProducto, idExhibidor } = req.query;
        if (idProducto && idExhibidor) {
          const relacion = await prisma.producto_has_exhibidores.findFirst({
            where: {
              Producto_idProducto: parseInt(idProducto, 10),
              Exhibidores_idExhibidores: parseInt(idExhibidor, 10),
            },
          });
          if (relacion) {
            res.status(200).json(relacion);
          } else {
            res.status(404).json({ error: 'Relación no encontrada' });
          }
        } else {
          const relaciones = await prisma.producto_has_exhibidores.findMany();
          res.status(200).json(relaciones);
        }
      } catch (error) {
        res.status(500).json({ error: 'Error al obtener relaciones' });
      }
      break;

    case 'POST': // Crear una nueva relación
      try {
        const { Producto_idProducto, Producto_Bodega_idBodega, Exhibidores_idExhibidores, Exhibidores_Bodega_idBodega } = req.body;
        const newRelacion = await prisma.producto_has_exhibidores.create({
          data: {
            Producto_idProducto,
            Producto_Bodega_idBodega,
            Exhibidores_idExhibidores,
            Exhibidores_Bodega_idBodega,
          },
        });
        res.status(201).json(newRelacion);
      } catch (error) {
        res.status(500).json({ error: 'Error al crear relación' });
      }
      break;

    case 'DELETE': // Eliminar una relación
      try {
        const { Producto_idProducto, Exhibidores_idExhibidores } = req.query;
        await prisma.producto_has_exhibidores.deleteMany({
          where: {
            Producto_idProducto: parseInt(Producto_idProducto, 10),
            Exhibidores_idExhibidores: parseInt(Exhibidores_idExhibidores, 10),
          },
        });
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: 'Error al eliminar relación' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
