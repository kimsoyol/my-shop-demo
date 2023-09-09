import express from "express"
const router = express.Router();
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct, createProductReview, getTopProducts } from "../controllers/productController.js";
import { protect, admin } from '../middleware/authMiddleware.js'
import checkObjectId from "../middleware/chcekObjectid.js";

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/top').get(getTopProducts)
router.route('/:id').get(checkObjectId, getProductById).put(protect, admin, checkObjectId, updateProduct).delete(protect, admin, checkObjectId, deleteProduct)
router.route('/:id/review').post(protect, checkObjectId, createProductReview)



export default router