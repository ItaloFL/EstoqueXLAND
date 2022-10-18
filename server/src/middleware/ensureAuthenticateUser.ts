import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { AppError } from '../errors/AppError/AppError'

type PayLoad = {
  sub: string,
  isAdmin: boolean
}

export function ensureAuthenticateMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization

  if (!authHeader) throw new AppError('Token is missing')

  const [, token] = authHeader.split(' ')

  try {
    const { sub: user_id, isAdmin: isAdmin } = verify(
      token,
      '52ccfcdf7de6a1227b93b50115acd4e9'
    ) as PayLoad

    request.user = {
      id: user_id,
      isAdmin: isAdmin
    }

    next()
  } catch {
    throw new AppError('Token invalido')
  }
}
