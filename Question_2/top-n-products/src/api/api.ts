/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const getProducts = async (params: any) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/companies/${params.company}/categories/${params.category}/products`, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProductDetails = async (company: string,category: string, productId: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/comapanies/${company}/categories/${category}/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error;
  }
};
