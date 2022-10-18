import { Router } from 'express'
import multer from 'multer'
import configMulter from '../config/multer'
import { ensureAuthenticateMiddleware } from '../middleware/ensureAuthenticateUser'
import { AuthenticateUserController } from '../modules/accounts/authenticateUser/AuthenticateUserController'
import { CreateProductController } from '../modules/products/createProduct/CreateProductController'
import { DeleteProductController } from '../modules/products/deleteProduct/DeleteProductController'
import { EditProductController } from '../modules/products/editProduct/EditProductController'
import { ListAllProductsController } from '../modules/products/listAllProducts/ListAllProductsController'

const routes = Router()
const upload = multer(configMulter)

const authenticateUserController = new AuthenticateUserController()
const createProductController = new CreateProductController()
const listAllProductsController = new ListAllProductsController()
const editProductController = new EditProductController()
const deleteProductController = new DeleteProductController()

routes.post('/login', authenticateUserController.handle)
routes.post('/product', upload.single('image'), createProductController.handle)
routes.get(
  '/product',
  ensureAuthenticateMiddleware,
  listAllProductsController.handle
)

routes.put(
  '/product/:id',
  editProductController.handle
)

routes.delete(
  '/product/:id',
  ensureAuthenticateMiddleware,
  deleteProductController.handle
)

export { routes }
