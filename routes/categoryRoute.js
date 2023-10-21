import express from 'express'
import { isAdmin, requireSignIn } from './../middlewares/authMiddleware.js'
import { UpdateCategoryController, singleCategoryController, categoryController, createCategoryController, deleteCategoryController } from './../controllers/categoryController.js'


const router = express.Router()

//create category
router.post('/create-category', requireSignIn, isAdmin, createCategoryController)
//update category
router.put('/update-category/:id', requireSignIn, isAdmin, UpdateCategoryController)
//get all category
router.get('/get-category', categoryController)
//get single category
router.get('/single-category/:slug', singleCategoryController)
//delete category
router.delete('/delete-category/:id', requireSignIn, isAdmin, deleteCategoryController)
export default router 