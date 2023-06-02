'use client';

import styled from 'styled-components';

const ProductsSection = styled.section`
  padding-bottom: 4rem;
`;

export const ColWrapper = styled.div`
  display: grid;
  @media screen and (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
  }
  gap: 40px;
  margin-top: 40px;
`;

export const Box = styled.div`
  background-color: #fff;
  border-radius: 6px;
  padding: 1.8rem;
`;

export const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Price = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
`;

export default function Layout({ children }) {
  return (
    <>
      <ProductsSection>{children}</ProductsSection>
    </>
  );
}
