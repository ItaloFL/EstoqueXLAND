import { prisma } from '../../../prisma/client'

export class ListAllProductsUseCase {
  async execute() {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return products
  }
}
