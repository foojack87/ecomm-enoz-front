'use client';

import Button from '@/components/Button';
import CartContext from '@/components/CartContext';
import Center from '@/components/Center';
import Input from '@/components/Input';
import Table from '@/components/Table';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

const ColumnsContainer = styled.div`
  display: grid;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.2fr 0.8fr;
  }
  gap: 2.6rem;
  margin-top: 2.6rem;
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 6px;
  padding: 0.6rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media screen and (min-width: 768px) {
    padding: 1.8rem;
  }
`;

const OrderInfoBox = styled.div`
  background-color: #fff;
  border-radius: 6px;
  padding: 1.8rem;
  height: min-content;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const ProductInfoCell = styled.td`
  padding: 8px 0;
`;

const ProductImageBox = styled.div`
  width: 100px;
  height: 100px;
  padding: 2px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100px;
    max-height: 100px;
  }
  @media screen and (min-width: 768px) {
    padding: 8px;
  }
`;

const QuantityLabel = styled.span`
  padding: 0 15px;
  display: block;
  @media screen and (min-width: 768px) {
    display: inline-block;
    padding: 0 12px;
  }
`;

const CityHolder = styled.div`
  display: flex;
  gap: 6px;
`;

const Cart = () => {
  const { cartProducts, addProduct, removeProduct, clearCart } =
    useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [country, setCountry] = useState('');

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      city,
      postalCode,
      streetAddress,
      country,
      products: cartProducts.join(','),
    };

    axios
      .post('/api/checkout', formData)
      .then((response) => {
        const { data } = response;
        console.log(data);
        // Handle the response data

        // Redirect to data.url
        window.location.href = data.url;
      })
      .catch((error) => {
        console.error(error);
        // Handle any errors
      });
  };

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post('/api/cart', { ids: cartProducts }).then((res) => {
        setProducts(res.data);
        console.log(res.data);
      });
    }
  }, [cartProducts]);

  const addQuantity = (id) => {
    addProduct(id);
  };

  const minusQuantity = (id) => {
    removeProduct(id);
  };

  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  if (window.location.href.includes('canceled')) {
    router.push('/cart');
  }

  if (window.location.href.includes('success')) {
  }

  return (
    <Center>
      <ColumnsContainer>
        <Box>
          <h2>Shopping Cart</h2>
          {!cartProducts?.length && (
            <div>Your cart is empty, start shopping!</div>
          )}
          {cartProducts?.length > 0 && (
            <Table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <ProductInfoCell>
                      <ProductImageBox>
                        <img src={product.images[0]} alt="product images" />
                      </ProductImageBox>
                      {product.title}
                    </ProductInfoCell>
                    <td>
                      <Button onClick={() => minusQuantity(product._id)}>
                        -
                      </Button>
                      <QuantityLabel>
                        {cartProducts.filter((id) => id === product._id).length}
                      </QuantityLabel>
                      <Button onClick={() => addQuantity(product._id)}>
                        +
                      </Button>
                    </td>
                    <td>
                      $
                      {cartProducts.filter((id) => id === product._id).length *
                        product.price}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td></td>
                  <td>${total}</td>
                </tr>
              </tbody>
            </Table>
          )}
        </Box>
        {!!cartProducts?.length && (
          <OrderInfoBox>
            <h2>Order Information</h2>
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Name"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <CityHolder>
                <Input
                  type="text"
                  placeholder="City"
                  value={city}
                  name="city"
                  onChange={(e) => setCity(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Postal Code"
                  value={postalCode}
                  name="postalCode"
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </CityHolder>
              <Input
                type="text"
                placeholder="Street Address"
                value={streetAddress}
                name="streetAddress"
                onChange={(e) => setStreetAddress(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Country"
                value={country}
                name="country"
                onChange={(e) => setCountry(e.target.value)}
              />
              <input
                name="products"
                type="hidden"
                value={cartProducts.join(',')}
              />
              <Button yellow block type="submit">
                Checkout
              </Button>
            </form>
          </OrderInfoBox>
        )}
      </ColumnsContainer>
    </Center>
  );
};

export default Cart;
