'use client';

import Header from '@/components/Header';
import styled from 'styled-components';

const CartSection = styled.section`
  padding-bottom: 4rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <CartSection>{children}</CartSection>
    </>
  );
}
