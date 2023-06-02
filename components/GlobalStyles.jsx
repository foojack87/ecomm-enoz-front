'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body{
  background-color: #eee;
  padding:0;
  margin:0;
}
`;

const GlobalStyle = ({ children }) => {
  return <GlobalStyles>{children}</GlobalStyles>;
};

export default GlobalStyle;
