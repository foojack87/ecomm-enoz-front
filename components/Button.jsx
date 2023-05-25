import styled, { css } from 'styled-components';

export const ButtonStyle = css`
  border: none;
  padding: 6px 16px;
  border-radius: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  svg {
    height: 1rem;
    margin-right: 0.5rem;
  }
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
      color: #333;
      border: 1px solid #aaa;
    `}
${(props) =>
    props.black &&
    css`
      background-color: #333;
      color: #fff;
      border: 1px solid #fff;
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
`;

const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
