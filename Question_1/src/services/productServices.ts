import { fetchProducts, Product } from '../utils/helper';

const productStore: { [key: number]: Product } = {};

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

    if (sortBy) {
      products = products.sort((a, b) => {
        if (sortOrder === 'desc') {
          return b[sortBy] > a[sortBy] ? 1 : -1;
        }
        return a[sortBy] > b[sortBy] ? 1 : -1;
      });
    }

    products = products.map((product,idx) => {
      const id = idx + 1;
      productStore[id] = product;
      return { ...product, id };
    });

    return products;
  } catch (error) {
    throw error;
  }
};

const getProductDetails = async (productId: number): Promise<Product> => {
  try {
    const product = productStore[productId];
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  } catch (error) {
    throw error;
  }
};

export { getTopProducts, getProductDetails };
