'use client';

import Center from '@/components/Center';
import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import CartContext from '@/components/CartContext';

const Box = styled.div`
  background-color: #fff;
  border-radius: 6px;
  padding: 1.8rem;
`;

const ColumnsContainer = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 2.6rem;
  margin-top: 2.6rem;
`;

const Success = () => {
  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    if (window.location.href.includes('success')) {
      clearCart();
    }
  }, []);

  return (
    <Center>
      <ColumnsContainer>
        <Box>
          <h1>Thanks for your order!</h1>
          <p>We will email you when your order is shipped.</p>
        </Box>
      </ColumnsContainer>
    </Center>
  );
};

export default Success;
