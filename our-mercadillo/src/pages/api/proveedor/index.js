import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET': // Obtener todos los proveedores o uno específico por ID
      try {
        const { id } = req.query;
        if (id) {
          const proveedor = await prisma.proveedor.findUnique({
            where: { idProveedor: parseInt(id, 10) },
          });
          if (proveedor) {
            res.status(200).json(proveedor);
          } else {
            res.status(404).json({ error: 'Proveedor no encontrado' });
          }
        } else {
          const proveedores = await prisma.proveedor.findMany();
          res.status(200).json(proveedores);
        }
      } catch (error) {
        res.status(500).json({ error: 'Error al obtener proveedores' });
      }
      break;

    case 'POST': // Crear un nuevo proveedor
      try {
        const newProveedor = await prisma.proveedor.create({
          data: req.body,
        });
        res.status(201).json(newProveedor);
      } catch (error) {
        res.status(500).json({ error: 'Error al crear proveedor' });
      }
      break;

    case 'PUT': // Actualizar un proveedor
      try {
        const { id, ...data } = req.body;
        const updatedProveedor = await prisma.proveedor.update({
          where: { idProveedor: parseInt(id, 10) },
          data,
        });
        res.status(200).json(updatedProveedor);
      } catch (error) {
        res.status(500).json({ error: 'Error al actualizar proveedor' });
      }
      break;

    case 'DELETE': // Eliminar un proveedor
      try {
        const { id } = req.query;
        await prisma.proveedor.delete({
          where: { idProveedor: parseInt(id, 10) },
        });
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: 'Error al eliminar proveedor' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
