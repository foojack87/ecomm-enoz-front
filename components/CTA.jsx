'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Center from './Center';

const SectionCTA = styled.section`
  background-color: #2a2a2a;
  padding: 80px 20px;
  margin-top: 6rem;
  position: relative;
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

const Notification = styled.div`
  background-color: green;
  color: white;
  padding: 10px;
  margin-bottom: 10px;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignupCTA = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [notification, setNotification] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/newuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: fullName, email }),
      });

      if (response.ok) {
        // Handle successful form submission
        console.log('User signup successful!');
        // Reset the form inputs
        setFullName('');
        setEmail('');
        setNotification(
          'Signup successful! You will receive notifications to your email.'
        );
      } else {
        // Handle form submission error
        console.error('User signup failed!');
      }
    } catch (error) {
      console.error('Error occurred while submitting form:', error);
    }
  };

  return (
    <Center>
      <SectionCTA>
        <Container>
          <CTAContent>
            <Heading>Sign up to get notified!</Heading>
            <Subheading>
              Get exclusive offers, discounts, and updates directly to your
              inbox.
            </Subheading>
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit">Sign up now</Button>
            </Form>
          </CTAContent>
        </Container>
        {notification && <Notification>{notification}</Notification>}
      </SectionCTA>
    </Center>
  );
};

export default SignupCTA;
