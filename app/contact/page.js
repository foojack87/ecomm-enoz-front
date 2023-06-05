'use client';

import SignupCTA from '@/components/CTA';
import styled from 'styled-components';

const SectionCTA = styled.section`
  background-color: #2a2a2a;
  padding: 80px 0;
`;

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CTAContent = styled.div`
  text-align: center;
`;

const Heading = styled.h2`
  color: #fff;
  font-size: 36px;
  margin-bottom: 20px;
`;

const Subheading = styled.p`
  color: #fff;
  font-size: 18px;
  margin-bottom: 40px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Input = styled.input`
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #f9b423;
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 14px 30px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f7960e;
  }
`;

const ContactUs = () => {
  return <SignupCTA />;
};

export default ContactUs;
