import { Request, Response } from 'express'
import { CreateProductUseCase } from './CreateProductUseCase'

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, description, price, quantEstoque } = request.body
    const image = request.file!.filename

    const createProductUseCase = new CreateProductUseCase()

    const product = await createProductUseCase.execute({
      name,
      description,
      price,
      image: `http://localhost:3333/files/${image}`,
      quantEstoque: Number(quantEstoque)
    })

    return response.json(product)
  }
}
