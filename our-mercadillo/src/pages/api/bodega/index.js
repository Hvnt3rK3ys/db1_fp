import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET': // Obtener todos los registros o uno por ID
      try {
        const { id } = req.query;
        if (id) {
          const bodega = await prisma.bodega.findUnique({
            where: { idBodega: parseInt(id, 10) },
          });
          if (bodega) {
            res.status(200).json(bodega);
          } else {
            res.status(404).json({ error: 'Bodega no encontrada' });
          }
        } else {
          const bodegas = await prisma.bodega.findMany();
          res.status(200).json(bodegas);
        }
      } catch (error) {
        res.status(500).json({ error: 'Error al obtener bodegas' });
      }
      break;

    case 'POST': // Crear un nuevo registro
      try {
        const newBodega = await prisma.bodega.create({
          data: req.body,
        });
        res.status(201).json(newBodega);
      } catch (error) {
        res.status(500).json({ error: 'Error al crear bodega' });
      }
      break;

    case 'PUT': // Actualizar un registro
      try {
        const { id, ...data } = req.body;
        const updatedBodega = await prisma.bodega.update({
          where: { idBodega: parseInt(id, 10) },
          data,
        });
        res.status(200).json(updatedBodega);
      } catch (error) {
        res.status(500).json({ error: 'Error al actualizar bodega' });
      }
      break;

    case 'DELETE': // Eliminar un registro
      try {
        const { id } = req.query;
        await prisma.bodega.delete({
          where: { idBodega: parseInt(id, 10) },
        });
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: 'Error al eliminar bodega' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
