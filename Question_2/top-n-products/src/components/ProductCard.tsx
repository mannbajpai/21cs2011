/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="body2">Price: {product.price}</Typography>
        <Typography variant="body2">Rating: {product.rating}</Typography>
        <Typography variant="body2">Company: {product.company}</Typography>
        <Typography variant="body2">Discount: {product.discount}</Typography>
        <Typography variant="body2">Availability: {product.availability}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
