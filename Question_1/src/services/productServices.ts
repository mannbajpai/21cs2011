import { fetchProducts, fetchProductDetails, Product } from '../utils/helper';

const getTopProducts = async (
  company: string,
  category: string,
  top: number,
  minPrice: number,
  maxPrice: number,
  sortBy?: keyof Product,
  sortOrder: 'asc' | 'desc' = 'asc'
): Promise<Product[]> => {
  try {
    let products = await fetchProducts(company, category, top, minPrice, maxPrice);

    // Sort products if sortBy and sortOrder are provided
    if (sortBy) {
      products = products.sort((a, b) => {
        if (sortOrder === 'desc') {
          return b[sortBy] > a[sortBy] ? 1 : -1;
        }
        return a[sortBy] > b[sortBy] ? 1 : -1;
      });
    }

    return products;
  } catch (error) {
    throw error;
  }
};

const getProductDetails = async (company: string, category: string, productId: string): Promise<Product> => {
  try {
    const product = await fetchProductDetails(company, category, productId);
    return product;
  } catch (error) {
    throw error;
  }
};

export { getTopProducts, getProductDetails };
