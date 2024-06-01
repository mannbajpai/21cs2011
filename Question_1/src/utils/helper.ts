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
  id: string;
  name: string;
  price: number;
  rating: number;
  company: string;
  discount: number;
  availability: string;
  // add other relevant fields here
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
    console.log(`Requesting: ${url} with params:`, params);
    const response = await apiClient.get(url, {
      params,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchProductDetails = async (
  company: string,
  category: string,
  productId: string
): Promise<Product> => {
  try {
    const response = await apiClient.get(
      `/test/companies/${company}/categories/${category}/products/${productId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { fetchProducts, fetchProductDetails, Product };
