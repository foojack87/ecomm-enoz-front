'use client';

import styled from 'styled-components';
import Center from './Center';
import ProductsGrid from './ProductsGrid';

const Title = styled.h2`
  font-weight: normal;
  font-size: 1.6rem;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
  margin: 30px 0 20px;
`;

const NewProductsWrapper = styled.div`
  background-color: #eee;
  padding: 2rem 0;
`;

const NewProducts = ({ newProducts }) => {
  console.log(newProducts);
  return (
    <NewProductsWrapper>
      <Center>
        <Title>Signature Collection</Title>
        <ProductsGrid products={newProducts} />
      </Center>
    </NewProductsWrapper>
  );
};

export default NewProducts;
