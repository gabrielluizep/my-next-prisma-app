import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient()

  try {
    const { id } = req.body

    if (!id) return res.status(400).json({ message: 'Missing id' })

    const user = await prisma.user.delete({
      where: { id },
    })

    return res.status(200).json(user)
  } catch (error) {
    return res.status(500).json({ message: 'Somwthing went wrong' })
  }
}
