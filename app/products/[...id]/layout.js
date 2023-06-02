'use client';

import Header from '@/components/Header';

import styled from 'styled-components';

const ProductSection = styled.section`
  padding-bottom: 4rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <ProductSection>{children}</ProductSection>
    </>
  );
}
