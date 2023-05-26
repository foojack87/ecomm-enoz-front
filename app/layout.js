'use client';

import { CartContextProvider } from '@/components/CartContext';
import { Roboto } from 'next/font/google';
import { createGlobalStyle } from 'styled-components';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Enoz Shop',
  description: 'Buy healthy, natural, tea based drinks here.',
};

const GlobalStyles = createGlobalStyle`
body{
  background-color: #eee;
  padding:0;
  margin:0;
}
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GlobalStyles />
      <CartContextProvider>
        <body className={roboto.className}>{children}</body>
      </CartContextProvider>
    </html>
  );
}
