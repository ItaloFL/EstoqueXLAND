import { prisma } from '../../../prisma/client'
import { AppError } from '../../../errors/AppError/AppError'

export class EditProductUseCase {
  async execute(id: string, quantEstoque: number) {
    const verifyIfProductExist = await prisma.product.findFirst({
      where: {
        id
      }
    })

    if (!verifyIfProductExist) throw new AppError('Produto não encontrado')

    if (quantEstoque <= 0) throw new AppError('Digite um numero maior que zero')

    if (verifyIfProductExist.quantEstoque < quantEstoque)
      throw new AppError('Quantidade de produtos insuficiente')

    const product = await prisma.product.update({
      where: {
        id
      },
      data: {
        quantEstoque: Number(verifyIfProductExist.quantEstoque - quantEstoque)
      }
    })

    return product
  }
}
