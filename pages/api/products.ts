import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export default async(req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const products = await prisma.products.findMany()
      res.status(200).json(products);
    } catch (err) {
      res.status(400).json({ message: 'Something went wrong' });
    }
  }
}