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

const NewProducts = ({ newProducts }) => {
  console.log(newProducts);
  return (
    <Center>
      <Title>Signature Collection</Title>
      <ProductsGrid products={newProducts} />
    </Center>
  );
};

export default NewProducts;
