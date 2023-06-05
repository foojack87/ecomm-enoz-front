'use client';

import Center from '@/components/Center';
import Header from '@/components/Header';

import styled from 'styled-components';

const ContactSection = styled.section`
  padding-bottom: 2rem;
`;

export const Image = styled.img`
  width: 100%;
`;

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <ContactSection>
        <Center>{children}</Center>
      </ContactSection>
    </>
  );
}
