'use client';

import styled from 'styled-components';
import Center from './Center';
import Button from './Button';
import ButtonLink from './ButtonLink';

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
                  yellow={1}
                  outline={1}
                >
                  Read more
                </ButtonLink>
                <Button yellow>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  Buy now
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
