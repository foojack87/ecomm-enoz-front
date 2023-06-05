'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Center from './Center';
import { useContext, useState } from 'react';
import CartContext from './CartContext';
import BarsIcon from './icons/Bars';

const StyledHeader = styled.header`
  background-color: rgba(255, 249, 219, 0.7);
  position: sticky;
  top: 0;
  z-index: 99;
`;

const Logo = styled(Link)`
  text-decration: none;
  position: relative;
  z-index: 99;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const NavLink = styled(Link)`
  ${(props) =>
    props.mobileNav
      ? 'margin-bottom: 16px; border: 1px solid black; text-align: center; padding: 6px; width: 100%;'
      : '  margin-bottom: 0px border: none;'}
  display: block;
  color: #3f3e28;
  text-decoration: none;
`;

const NavBar = styled.nav`
  ${(props) =>
    props.mobileNav
      ? ' display: block;   background-color: rgba(255, 249, 219, 0.7);'
      : 'display:none;'}
  gap: 2rem;
  position: fixed;
  inset: 0 10px;
  padding: 100px 20px 20px;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 99;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const { cartProducts } = useContext(CartContext);
  const [mobileNav, setMobileNav] = useState(false);

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
          <NavBar mobileNav={mobileNav}>
            <NavLink mobileNav={mobileNav} href={'/'}>
              Home
            </NavLink>
            <NavLink mobileNav={mobileNav} href={'/products'}>
              All Products
            </NavLink>
            <NavLink mobileNav={mobileNav} href={'/about'}>
              About Us
            </NavLink>
            <NavLink mobileNav={mobileNav} href={'/contact'}>
              Contact
            </NavLink>
            <NavLink mobileNav={mobileNav} href={'/cart'}>
              Cart ({cartProducts?.length})
            </NavLink>
          </NavBar>
          <NavButton onClick={() => setMobileNav((prev) => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
};

export default Header;
