import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET': // Obtener todos los registros o uno por ID
      try {
        const { id } = req.query;
        if (id) {
          const cliente = await prisma.cliente.findUnique({
            where: { idCliente: parseInt(id, 10) },
          });
          if (cliente) {
            res.status(200).json(cliente);
          } else {
            res.status(404).json({ error: 'Cliente no encontrado' });
          }
        } else {
          const clientes = await prisma.cliente.findMany();
          res.status(200).json(clientes);
        }
      } catch (error) {
        res.status(500).json({ error: 'Error al obtener clientes' });
      }
      break;

    case 'POST': // Crear un nuevo registro
      try {
        const newCliente = await prisma.cliente.create({
          data: req.body,
        });
        res.status(201).json(newCliente);
      } catch (error) {
        res.status(500).json({ error: 'Error al crear cliente' });
      }
      break;

    case 'PUT': // Actualizar un registro
      try {
        const { id, ...data } = req.body;
        const updatedCliente = await prisma.cliente.update({
          where: { idCliente: parseInt(id, 10) },
          data,
        });
        res.status(200).json(updatedCliente);
      } catch (error) {
        res.status(500).json({ error: 'Error al actualizar cliente' });
      }
      break;

    case 'DELETE': // Eliminar un registro
      try {
        const { id } = req.query;
        await prisma.cliente.delete({
          where: { idCliente: parseInt(id, 10) },
        });
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: 'Error al eliminar cliente' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
