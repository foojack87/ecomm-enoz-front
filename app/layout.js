import { CartContextProvider } from '@/components/CartContext';
import { Roboto } from 'next/font/google';
import GlobalStyle from '@/components/GlobalStyles';
import StyledComponentsRegistry from '@/lib/registry';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  icons: {
    icon: '/icon.png',
  },
  title: 'Enoz | Secret of Concentration',
  description:
    'We are a beverage company that has developed tea-based beverages catered to consumers that spend long hours on the their computer and electronic devices.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CartContextProvider>
        <body className={roboto.className}>
          <StyledComponentsRegistry>
            <GlobalStyle />
            {children}
          </StyledComponentsRegistry>
        </body>
      </CartContextProvider>
    </html>
  );
}
