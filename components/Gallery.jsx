'use client';

import styled from 'styled-components';

const TextSection = styled.div`
  padding: 2rem;
  background-color: #333;
  color: white;
`;

const GalleryTitle = styled.div`
  font-size: 7rem;
  color: white;
  text-shadow: 0 0 5px black;
`;

const GalleryWrapper = styled.div`
  height: 100vh;
  margin-top: 8rem;
  overflow-y: auto;
  overflow-x: hidden;
  perspective: 10px;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-conter: center;
  align-items: center;
  height: 100%;
  transform-style: perserve-3d;
  z-index: -1;
`;

const Background = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  bottom: 0;
  z-index: -1;
`;

const Foreground = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Gallery = () => {
  return (
    <GalleryWrapper>
      <ImageWrapper>
        <Foreground src="/gallery4.webp" alt="tea garden" />
        <Background src="/leaves.png" alt="tea garden" />
        <GalleryTitle>Serenity</GalleryTitle>
      </ImageWrapper>
      <TextSection>
        <h2>Ingredients</h2>
        <p>
          Ingredients are all natural with zero additives. Main ingredients
          include tea leaves and goji berries. We do not add any sugar and only
          use the natural sweetness from the goji berries, while also using tea
          that comes with natural savoriness.
        </p>
        <h2>Concentration and Health</h2>
        <p>
          Natural caffeine and L-Theanine from tea leaves to keep you
          concentrated. Tea leaves naturally produces L-Theanine. L-theanine
          promotes relaxation by reducing stress and anxiety.
        </p>
        <h2>Origin</h2>
        <p>
          Tea leaves are all hand-picked from the high mountains of Taiwan. Our
          ingredients, especially our tea leaves are very carefully roasted and
          curated from our own tea garden. We use the best quality and don't use
          any pesticides at all.
        </p>
        <h2>Signature Brew</h2>
        <p>
          Our drink can be brewed both hot or cold depending on preferences.
          However our signature is the cold brew. With just 1-3 min of shaking
          in a bottle, it is ready to drink.
        </p>
      </TextSection>
    </GalleryWrapper>
  );
};

export default Gallery;
