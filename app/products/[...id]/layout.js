'use client';

import Header from '@/components/Header';

import styled from 'styled-components';

const ProductSection = styled.section`
  padding-bottom: 2rem;
`;

export const Image = styled.img`
  width: 100%;
`;

export const ProductDetails = styled.div`
  padding-bottom: 1.5rem;
`;

export const ProductProperties = styled.div`
  padding-bottom: 1rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <ProductSection>{children}</ProductSection>
    </>
  );
}
