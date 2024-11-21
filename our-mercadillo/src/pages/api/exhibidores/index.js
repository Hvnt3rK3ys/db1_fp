import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET': // Obtener todos los registros o uno por ID
      try {
        const { id } = req.query;
        if (id) {
          const exhibidor = await prisma.exhibidores.findUnique({
            where: { idExhibidores: parseInt(id, 10) },
          });
          if (exhibidor) {
            res.status(200).json(exhibidor);
          } else {
            res.status(404).json({ error: 'Exhibidor no encontrado' });
          }
        } else {
          const exhibidores = await prisma.exhibidores.findMany();
          res.status(200).json(exhibidores);
        }
      } catch (error) {
        res.status(500).json({ error: 'Error al obtener exhibidores' });
      }
      break;

    case 'POST': // Crear un nuevo registro
      try {
        const newExhibidor = await prisma.exhibidores.create({
          data: req.body,
        });
        res.status(201).json(newExhibidor);
      } catch (error) {
        res.status(500).json({ error: 'Error al crear exhibidor' });
      }
      break;

    case 'PUT': // Actualizar un registro
      try {
        const { id, ...data } = req.body;
        const updatedExhibidor = await prisma.exhibidores.update({
          where: { idExhibidores: parseInt(id, 10) },
          data,
        });
        res.status(200).json(updatedExhibidor);
      } catch (error) {
        res.status(500).json({ error: 'Error al actualizar exhibidor' });
      }
      break;

    case 'DELETE': // Eliminar un registro
      try {
        const { id } = req.query;
        await prisma.exhibidores.delete({
          where: { idExhibidores: parseInt(id, 10) },
        });
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: 'Error al eliminar exhibidor' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
