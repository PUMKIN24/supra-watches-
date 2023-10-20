import express from 'express'
import formidable from 'express-formidable'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
import { createProductController, deleteProductController, getProductController, getSingleProduct, productPhotoController, updateProductController } from '../controllers/productController.js'

const router = express.Router()

router.post('/create-product', requireSignIn, isAdmin, formidable, createProductController)
router.put('/update-product/:pid', requireSignIn, isAdmin, formidable, updateProductController)
router.get('/get-product', getProductController)
router.get('/get-single-product/:slug', getSingleProduct)
router.get('/product-photo/:pid', productPhotoController)
router.delete('/product/:pid', deleteProductController)
export default router