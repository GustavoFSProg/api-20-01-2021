import { Router } from 'express'
import multer from 'multer'
import userController from './controllers/userController'
import productController from './controllers/productController'
import uploadConfig from './config/uploadConfig'

const routes = new Router()
const upload = multer(uploadConfig)

routes.get('/', userController.getAll)
routes.get('/name', userController.getByName)
routes.post('/register', userController.create)
routes.put('/update/:id', userController.Update)
routes.delete('/del/:id', userController.remove)

routes.post(
  '/products/register',
  upload.single('image'),
  productController.create
)
routes.get('/products', productController.getAll)

export default routes
