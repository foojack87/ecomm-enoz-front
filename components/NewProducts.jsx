'use client';

import styled from 'styled-components';

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const NewProducts = ({ newProducts }) => {
  console.log(newProducts);

  return (
    <ProductsGrid>
      {newProducts?.length > 0 &&
        newProducts.map((product, index) => (
          <div key={index}>{product.title}</div>
        ))}
    </ProductsGrid>
  );
};

export default NewProducts;
