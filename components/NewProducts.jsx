'use client';

import styled from 'styled-components';
import Center from './Center';
import ProductBox from './ProductBox';

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.8rem;
  padding-top: 1.6rem;
`;

const Title = styled.h2`
  font-weight: normal;
  font-size: 2rem;
  margin: 30px 0 20px;
`;

const NewProducts = ({ newProducts }) => {
  console.log(newProducts);

  return (
    <Center>
      <Title>Signature Collection</Title>
      <ProductsGrid>
        {newProducts?.length > 0 &&
          newProducts.map((product, index) => (
            <ProductBox key={index} {...product} />
          ))}
      </ProductsGrid>
    </Center>
  );
};

export default NewProducts;
