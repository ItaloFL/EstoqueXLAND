import { Request, Response } from 'express'
import { EditProductUseCase } from './EditProductUseCase'


export class EditProductController {
  async handle(request: Request, response: Response){

    const { id } = request.params
    const { quantEstoque } = request.body

    const editProductUseCase = new EditProductUseCase()

    const product = await editProductUseCase.execute(id, Number(quantEstoque))

    return response.json(product)
  }
}