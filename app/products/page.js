'use client';

import Center from '@/components/Center';
import Header from '@/components/Header';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductsGrid from '@/components/ProductsGrid';

const Title = styled.h1`
  font-size: 1.5em;
`;

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  console.log(products);

  return (
    <>
      <Header />
      <Center>
        <Title>All Products</Title>
        <ProductsGrid products={products} />
      </Center>
    </>
  );
};

export default ProductsPage;
