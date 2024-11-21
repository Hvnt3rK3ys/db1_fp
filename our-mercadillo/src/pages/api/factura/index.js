import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET': // Obtener todas las facturas o una específica por ID
      try {
        const { id } = req.query;
        if (id) {
          const factura = await prisma.factura.findUnique({
            where: { idFactura: parseInt(id, 10) },
          });
          if (factura) {
            res.status(200).json(factura);
          } else {
            res.status(404).json({ error: 'Factura no encontrada' });
          }
        } else {
          const facturas = await prisma.factura.findMany();
          res.status(200).json(facturas);
        }
      } catch (error) {
        res.status(500).json({ error: 'Error al obtener facturas' });
      }
      break;

    case 'POST': // Crear una nueva factura
      try {
        const newFactura = await prisma.factura.create({
          data: req.body,
        });
        res.status(201).json(newFactura);
      } catch (error) {
        res.status(500).json({ error: 'Error al crear factura' });
      }
      break;

    case 'PUT': // Actualizar una factura
      try {
        const { id, ...data } = req.body;
        const updatedFactura = await prisma.factura.update({
          where: { idFactura: parseInt(id, 10) },
          data,
        });
        res.status(200).json(updatedFactura);
      } catch (error) {
        res.status(500).json({ error: 'Error al actualizar factura' });
      }
      break;

    case 'DELETE': // Eliminar una factura
      try {
        const { id } = req.query;
        await prisma.factura.delete({
          where: { idFactura: parseInt(id, 10) },
        });
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: 'Error al eliminar factura' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
