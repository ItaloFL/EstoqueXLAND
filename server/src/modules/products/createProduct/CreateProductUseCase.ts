import { prisma } from '../../../prisma/client'

interface ProductDTO {
  name: string
  description: string
  image: string
  price: string
  quantEstoque: number
}

export class CreateProductUseCase {
  async execute({ name, description, image, price, quantEstoque }: ProductDTO) {
    const product = await prisma.product.create({
      data: {
        name,
        description,
        image,
        price,
        quantEstoque
      }
    })

    return product
  }
}
