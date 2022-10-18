import { Request, Response } from 'express'
import { DeleteProductUseCase } from './DeleteProductUseCase'

export class DeleteProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params

    const deleteProductUseCase = new DeleteProductUseCase()

    await deleteProductUseCase.execute(id)

    return response.json({
      message: 'Deletado com sucesso'
    })
  }
}
