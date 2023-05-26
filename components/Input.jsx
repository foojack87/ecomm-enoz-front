import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 4px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
`;

const Input = (props) => {
  return <StyledInput {...props} />;
};

export default Input;
