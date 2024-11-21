import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET': // Obtener todos los registros o uno por ID
      try {
        const { id } = req.query;
        if (id) {
          const empleado = await prisma.empleado.findUnique({
            where: { idEmpleado: parseInt(id, 10) },
          });
          if (empleado) {
            res.status(200).json(empleado);
          } else {
            res.status(404).json({ error: 'Empleado no encontrado' });
          }
        } else {
          const empleados = await prisma.empleado.findMany();
          res.status(200).json(empleados);
        }
      } catch (error) {
        res.status(500).json({ error: 'Error al obtener empleados' });
      }
      break;

    case 'POST': // Crear un nuevo registro
      try {
        const newEmpleado = await prisma.empleado.create({
          data: req.body,
        });
        res.status(201).json(newEmpleado);
      } catch (error) {
        res.status(500).json({ error: 'Error al crear empleado' });
      }
      break;

    case 'PUT': // Actualizar un registro
      try {
        const { id, ...data } = req.body;
        const updatedEmpleado = await prisma.empleado.update({
          where: { idEmpleado: parseInt(id, 10) },
          data,
        });
        res.status(200).json(updatedEmpleado);
      } catch (error) {
        res.status(500).json({ error: 'Error al actualizar empleado' });
      }
      break;

    case 'DELETE': // Eliminar un registro
      try {
        const { id } = req.query;
        await prisma.empleado.delete({
          where: { idEmpleado: parseInt(id, 10) },
        });
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: 'Error al eliminar empleado' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
