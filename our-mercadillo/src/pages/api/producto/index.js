import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET': // Obtener todos los productos o uno específico por ID
      try {
        const { id } = req.query;
        if (id) {
          const producto = await prisma.producto.findUnique({
            where: { idProducto: parseInt(id, 10) },
          });
          if (producto) {
            res.status(200).json(producto);
          } else {
            res.status(404).json({ error: 'Producto no encontrado' });
          }
        } else {
          const productos = await prisma.producto.findMany();
          res.status(200).json(productos);
        }
      } catch (error) {
        res.status(500).json({ error: 'Error al obtener productos' });
      }
      break;

    case 'POST': // Crear un nuevo producto
      try {
        const newProducto = await prisma.producto.create({
          data: req.body,
        });
        res.status(201).json(newProducto);
      } catch (error) {
        res.status(500).json({ error: 'Error al crear producto' });
      }
      break;

    case 'PUT': // Actualizar un producto
      try {
        const { id, ...data } = req.body;
        const updatedProducto = await prisma.producto.update({
          where: { idProducto: parseInt(id, 10) },
          data,
        });
        res.status(200).json(updatedProducto);
      } catch (error) {
        res.status(500).json({ error: 'Error al actualizar producto' });
      }
      break;

    case 'DELETE': // Eliminar un producto
      try {
        const { id } = req.query;
        await prisma.producto.delete({
          where: { idProducto: parseInt(id, 10) },
        });
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: 'Error al eliminar producto' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
