import { Request, Response } from 'express';
import { getTopProducts, getProductDetails } from '../services/productServices';
import { Product } from "../utils/helper";

const fetchTopProducts = async (req: Request, res: Response): Promise<void> => {
  const { companyname, categoryname } = req.params;
  const { top = '10', minPrice = '0', maxPrice = '10000', sortBy, sortOrder = 'asc' } = req.query;

  try {
    const products = await getTopProducts(
      companyname,
      categoryname,
      parseInt(top as string),
      parseInt(minPrice as string),
      parseInt(maxPrice as string),
      sortBy as keyof Product,
      sortOrder as 'asc' | 'desc'
    );
    res.status(200).json(products);
  } catch (error: unknown) {
    if (typeof error === "string") {
      error.toUpperCase();
    } else if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

const fetchProductDetailsById = async (req: Request, res: Response): Promise<void> => {
  const { productid } = req.params;
  const id:number = +productid;
  try {
    const product = await getProductDetails(id);
    res.status(200).json(product);
  } catch (error: unknown) {
    if (typeof error === "string") {
      error.toUpperCase();
    } else if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export { fetchTopProducts, fetchProductDetailsById };





