import { Router } from 'express';
import { fetchTopProducts, fetchProductDetailsById } from '../controllers/productControllers';

const router: Router = Router();

router.get('/companies/:companyname/categories/:categoryname/products', fetchTopProducts);
router.get('/companies/:companyname/categories/:categoryname/products/:productid', fetchProductDetailsById);

export default router;
