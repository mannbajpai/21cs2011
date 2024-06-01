import React from 'react';
import ProductList from '../components/ProductList';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Top N Products</h1>
      <ProductList />
    </div>
  );
};

export default HomePage;
