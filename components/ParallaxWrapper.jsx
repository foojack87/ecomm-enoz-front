'use client';

import styled from 'styled-components';

export const ParallaxWrapper = styled.div`
  height: calc(100vh - 4rem);
  margin-top: -4rem;
  overflow-y: auto;
  overflow-x: hidden;
  perspective: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
