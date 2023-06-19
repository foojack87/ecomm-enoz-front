'use client';

import Center from '@/components/Center';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding-bottom: 4rem;
  margin-top: 2.6rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <AboutSection>
        <Center>{children}</Center>
        <Footer />
      </AboutSection>
    </>
  );
}
