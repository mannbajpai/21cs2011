import axios, { AxiosInstance } from "axios";
import dotenv from "dotenv";

dotenv.config();

const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
});

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  company: string;
  discount: number;
  availability: string;
}

const fetchProducts = async (
  company: string,
  category: string,
  top: number,
  minPrice: number,
  maxPrice: number
): Promise<Product[]> => {
  const url = `/test/companies/${company}/categories/${category}/products`;
  const params = { top, minPrice, maxPrice };
  try {
    const response = await apiClient.get(url, {
      params,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { fetchProducts, Product };
