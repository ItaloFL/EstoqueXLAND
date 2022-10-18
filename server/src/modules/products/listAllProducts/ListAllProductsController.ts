import { Request, Response } from 'express'
import { ListAllProductsUseCase } from './ListAllProductsUseCase'

export class ListAllProductsController {
  async handle(request: Request, response: Response) {
    const listAllProductUseCase = new ListAllProductsUseCase()

    const products = await listAllProductUseCase.execute()

    return response.json(products)
  }
}
