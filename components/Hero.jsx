'use client';

import styled from 'styled-components';
import Center from './Center';
import Button from './Button';
import ButtonLink from './ButtonLink';
import CartIcon from './icons/cartIcon';
import { useContext } from 'react';
import CartContext from './CartContext';

const Background = styled.div`
  background-color: #fff9db;
  color: #555;
  padding: 6rem 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: bold;
  font-size: 3.2rem;
`;

const Desc = styled.p`
  font-size: 0.8rem;
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 6rem;
  img {
    max-width: 100%;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const Hero = ({ product }) => {
  console.log(product);
  const { addProduct } = useContext(CartContext);
  const addProductToCart = () => {
    addProduct(product._id);
  };

  return (
    <Background>
      <Center>
        <ColumnsWrapper>
          <Column>
            <img src="/oolong_cropped.png" alt="oolong" />
          </Column>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Desc>{product.description}</Desc>
              <ButtonsContainer>
                <ButtonLink
                  href={'/products/' + product._id}
                  black={1}
                  outline={1}
                >
                  Read more
                </ButtonLink>
                <Button yellow onClick={addProductToCart}>
                  <CartIcon />
                  Add to cart
                </Button>
              </ButtonsContainer>
            </div>
          </Column>
        </ColumnsWrapper>
      </Center>
    </Background>
  );
};

export default Hero;
