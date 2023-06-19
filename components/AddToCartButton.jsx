'use client';
import styled, { css, keyframes } from 'styled-components';
import CartContext from '@/components/CartContext';
import { useContext, useState } from 'react';

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const ButtonStyle = css`
  border: none;
  padding: 6px 16px;
  border-radius: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-weight: 500;
  svg {
    height: 1rem;
    margin-right: 0.5rem;
  }
  ${(props) =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}
  ${(props) =>
    props.yellow &&
    !props.outline &&
    css`
      background-color: #fcc419;
      border: 1px solid #fcc419;
      color: #333;
    `}
  ${(props) =>
    props.yellow &&
    props.outline &&
    css`
      background-color: transparent;
      color: #f08c00;
      border: 1px solid #f08c00;
    `}
${(props) =>
    props.black &&
    props.outline &&
    css`
      background-color: transparent;
      color: #333;
      border: 1px solid #aaa;
    `}
${(props) =>
    props.size === 'l' &&
    css`
      font-size: 1.2rem;
      padding: 10px 20px;
      svg {
        height: 1.5rem;
      }
    `}
`;

export const StyledButton = styled.button`
  ${ButtonStyle}
  ${({ isClicked }) =>
    isClicked &&
    css`
      animation: ${pulseAnimation} 0.5s ease-in-out;
    `};
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const AddToCartButton = ({ id, children, ...rest }) => {
  const { addProduct } = useContext(CartContext);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    addProduct(id);

    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };

  return (
    <StyledButton onClick={handleClick} isClicked={isClicked} {...rest}>
      {isClicked ? 'Added!' : children}
    </StyledButton>
  );
};

export default AddToCartButton;
