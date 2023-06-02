'use client';

import { useState } from 'react';
import styled from 'styled-components';

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const BigImageWrapper = styled.div`
  text-align: center;
`;

const BigImage = styled.img`
  max-width: 100%;
  max-height: 150px;
`;

const ImageButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 0.8rem;
`;

const ImageButton = styled.div`
  border: 2px solid #ccc;
  ${(props) =>
    props.active
      ? 'border-color: #ccc'
      : 'border-color: transparent; opacity: 0.7;'};
  border-radius: 6px;
  height: 3rem;
  padding: 0.1rem;
  cursor: pointer;
`;

const ProductImages = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images?.[0]);

  return (
    <>
      <BigImageWrapper>
        <BigImage src={activeImage} />
      </BigImageWrapper>
      <ImageButtons>
        {images.map((img, index) => (
          <ImageButton
            key={index}
            active={img === activeImage}
            onClick={() => setActiveImage(img)}
          >
            <Image src={img} alt="product-imgs" />
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  );
};

export default ProductImages;
