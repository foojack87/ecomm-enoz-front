'use client';

import Header from '@/components/Header';

import styled from 'styled-components';

const ProductSection = styled.section`
  padding-bottom: 2rem;
`;

export const Image = styled.img`
  width: 100%;
`;

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <ProductSection>{children}</ProductSection>
    </>
  );
}
