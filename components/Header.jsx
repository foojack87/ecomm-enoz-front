'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Center from './Center';
import { useContext } from 'react';
import CartContext from './CartContext';

const StyledHeader = styled.header`
  background-color: rgba(255, 249, 219, 0.7);
  position: sticky;
  top: 0;
  z-index: 99;
`;

const Logo = styled(Link)`
  text-decration: none;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const NavLink = styled(Link)`
  color: #3f3e28;
  text-decoration: none;
`;

const NavBar = styled.nav`
  display: flex;
  gap: 2rem;
`;

const Header = () => {
  const { cartProducts } = useContext(CartContext);

  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={'/'}>
            <Image
              src="/enoz logo.png"
              width={200}
              height={65}
              alt="brand logo"
            />
          </Logo>
          <NavBar>
            <NavLink href={'/'}>Home</NavLink>
            <NavLink href={'/products'}>All Products</NavLink>
            <NavLink href={'/categories'}>Categories</NavLink>
            <NavLink href={'/account'}>Account</NavLink>
            <NavLink href={'/cart'}>Cart ({cartProducts?.length})</NavLink>
          </NavBar>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
};

export default Header;
