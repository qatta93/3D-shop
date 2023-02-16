import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const users = async(req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const users = await prisma.user.findMany()
      res.status(200).json(users);
    } catch (err) {
      res.status(400).json({ message: 'Something went wrong' });
    }
  }
}

export default users;