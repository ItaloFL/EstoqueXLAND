import { compare } from 'bcryptjs'
import { prisma } from '../../../prisma/client'
import { sign } from 'jsonwebtoken'
import { AppError } from '../../../errors/AppError/AppError'

export class AuthenticateUserUseCase {
  async execute(username: string, password: string) {
    const verifyIfUserExist = await prisma.user.findFirst({
      where: {
        username
      }
    })

    if (!verifyIfUserExist) throw new AppError('User or password incorrect')

    const verifyIfPasswordCorrect = await compare(
      password,
      verifyIfUserExist.password
    )

    if (!verifyIfPasswordCorrect)
      throw new AppError('User or password incorrect')

    const token = sign(
      { id: verifyIfUserExist.id, isAdmin: verifyIfUserExist.isAdmin },
      '52ccfcdf7de6a1227b93b50115acd4e9',
      {
        expiresIn: '1d'
      }
    )

    return {
      message: 'Login realizado com sucesso',
      token
    }
  }
}
