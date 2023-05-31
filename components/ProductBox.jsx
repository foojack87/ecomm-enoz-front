import styled from 'styled-components';
import Button from './Button';
import Link from 'next/link';
import { useContext } from 'react';
import CartContext from './CartContext';

const ProductWrapper = styled.div``;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 1.2rem;
  height: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 6px 6px 0 0;
  display: flex;
  img {
    max-width: 100%;
    max-height: 120px;
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  color: inherit;
  text-decoration: none;
  font-size: 1rem;
  margin: 0;
`;

const ProductInfoBox = styled.div`
  background-color: #fff9db;
  padding: 0.6rem;
  text-align: center;
  border-radius: 0px 0px 6px 6px;
`;

const PriceRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  margin-top: 6px;
  gap: 0.2rem;
`;

const Price = styled.span`
  font-size: 1.5rem;
  color: #333;
  font-weight: bold;
`;

const ProductBox = ({ _id, title, description, price, images }) => {
  const url = '/product/' + _id;
  const { addProduct } = useContext(CartContext);

  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <img src={images?.[0]} alt="product images" />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>${price}</Price>
          <Button yellow outline onClick={() => addProduct(_id)}>
            <div>
              <span>Add to cart</span>
            </div>
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
};

export default ProductBox;
