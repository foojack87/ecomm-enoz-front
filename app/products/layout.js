'use client';

import styled from 'styled-components';

const ProductsSection = styled.section`
  padding-bottom: 4rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <ProductsSection>{children}</ProductsSection>
    </>
  );
}
