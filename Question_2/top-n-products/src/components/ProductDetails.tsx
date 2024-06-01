import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';
import { getProductDetails } from '../api/api';

const ProductDetails: React.FC = () => {
  const { category, productId } = useParams<{ category: string; productId: string }>();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const product = await getProductDetails(category, productId);
        setProduct(product);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [category, productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{product.name}</Typography>
        <Typography variant="body1">Price: {product.price}</Typography>
        <Typography variant="body1">Rating: {product.rating}</Typography>
        <Typography variant="body1">Company: {product.company}</Typography>
        <Typography variant="body1">Discount: {product.discount}</Typography>
        <Typography variant="body1">Availability: {product.availability}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;
