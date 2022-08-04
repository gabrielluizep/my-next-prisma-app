// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Prisma, User } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '../../lib/prisma'

type Error = {
  message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<User | Error>) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' })

  try {
    const { user } = req.body
    // const user: Prisma.UserCreateInput = JSON.parse(req.body)

    const savedUser = await prisma.user.create({
      data: user,
    })

    res.status(200).json(savedUser)
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong' })
  }
}
