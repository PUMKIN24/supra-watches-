import express from 'express'
import { createProductController, deleteProductController, getProductController, getSingleProduct, productPhotoController, updateProductController } from '../controllers/productController.js'
import formidable from 'express-formidable'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController)
router.put('/update-product/:pid', requireSignIn, isAdmin, formidable(), updateProductController)
router.get('/get-product', getProductController)
router.get('/get-product/:slug', getSingleProduct)
router.get('/product-photo/:pid', productPhotoController)
router.delete('/delete-product/:pid', deleteProductController)
export default router