import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient({
  rejectOnNotFound: true,
});

const products = async(req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const products = await prisma.products.findMany()
      res.status(200).json(products);
    } catch (err) {
      res.status(400).json({ message: 'Something went wrong' });
    }
  }
  if (req.method === 'POST') {
    try {
      const product = JSON.parse(req.body);
      const savedProduct = await prisma.products.create({ data: product });
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(400).json({ message: 'Something went wrong' });
    }
  }
  if (req.method === 'UPDATE') {
    try {
      const productId = JSON.parse(req.body);

      const test = await prisma.products.update({ data: {quantity: 500}, where: { id: productId } });
      res.status(200).json(test);
    } catch (err) {
      res.status(400).json({ message: 'Something went wrong' });
    }
  }
  if (req.method === 'DELETE') {
    try {
      const productId = JSON.parse(req.body);
      const deleteProduct = await prisma.products.delete({ where: { id: productId } });
      res.status(200).json(deleteProduct);
    } catch (err) {
      res.status(400).json({ message: 'Something went wrong' });
    }
  }
}

export default products;