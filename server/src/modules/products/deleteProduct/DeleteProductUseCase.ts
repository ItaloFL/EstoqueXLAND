import { Prisma } from '@prisma/client'
import { AppError } from '../../../errors/AppError/AppError'
import { prisma } from '../../../prisma/client'

export class DeleteProductUseCase {
  async execute(id: string) {
    const verifyIfProductExist = await prisma.product.findFirst({
      where: {
        id
      }
    })

    if (!verifyIfProductExist) throw new AppError('Produto não encontrado')

    await prisma.product.delete({
      where: {
        id
      }
    })
  }
}
