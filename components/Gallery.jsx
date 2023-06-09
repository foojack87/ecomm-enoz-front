'use client';

import styled from 'styled-components';
import Header from './Header';
import SignupCTA from './CTA';
import Hero from './Hero';
import NewProducts from './NewProducts';
import Footer from './Footer';

const TextSection = styled.div`
  padding: 2rem;
  // background-color: #fff9db;
  color: #333;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

const Card = styled.div`
  background-color: #333;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #fff;
`;

const GalleryContainer = styled.div`
  position: relative;
  height: 90vh;
  margin-top: -4rem;
`;

const GalleryTitle = styled.div`
  font-size: 2rem;
  color: white;
  text-shadow: 0 0 5px black;
  display: flex;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    font-size: 7rem;
  }
`;

const GalleryWrapper = styled.div`
  height: 90vh;
  margin-top: -4rem;
  // overflow-y: auto;
  overflow-x: hidden;
  perspective: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-conter: center;
  align-items: center;
  height: 100%;
  transform-style: preserve-3d;
  z-index: -1;
`;

const Background = styled.img`
  position: absolute;
  height: 100%;
  width: 100vw;
  object-fit: cover;
  bottom: 0;
  z-index: -1;
  transform: translateZ(-10px) scale(2);
  clip-path: polygon(0% 0%, 100% 0%, 100% 92%, 0% 92%);
`;

const Foreground = styled.img`
  position: absolute;
  height: 100%;
  width: 100vw;
  object-fit: cover;
  z-index: -1;
  transform: translateZ(-5px) scale(1.5);
`;

const SvgStyle = styled.svg`
  width: 2.4rem;
  height: 2.4rem;
`;

const Gallery = ({ product, newProducts }) => {
  console.log(product);
  return (
    <GalleryContainer>
      <Header />
      <GalleryWrapper>
        <ImageWrapper>
          <Background src="/gallery4.webp" alt="tea garden" />
          <Foreground src="/leaves.png" alt="tea garden" />
          <GalleryTitle>Secret of Concentration</GalleryTitle>
        </ImageWrapper>
        <TextSection>
          <Card>
            <CardTitle>
              <SvgStyle
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
                />
              </SvgStyle>
              Ingredients
            </CardTitle>
            <CardText>
              Ingredients are all natural with zero additives. Main ingredients
              include tea leaves and goji berries. We do not add any sugar and
              only use the natural sweetness from the goji berries, while also
              using tea that comes with natural savoriness.
            </CardText>
          </Card>
          <Card>
            <CardTitle>
              <SvgStyle
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </SvgStyle>
              Concentration and Health
            </CardTitle>
            <CardText>
              Natural caffeine and L-Theanine from tea leaves to keep you
              concentrated. Tea leaves naturally produce L-Theanine. L-theanine
              promotes relaxation by reducing stress and anxiety.
            </CardText>
          </Card>
          <Card>
            <CardTitle>
              <SvgStyle
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
                />
              </SvgStyle>
              Origin
            </CardTitle>
            <CardText>
              Tea leaves are all hand-picked from the high mountains of Taiwan.
              Our ingredients, especially our tea leaves, are very carefully
              roasted and curated from our own tea garden. We use the best
              quality and don't use any pesticides at all.
            </CardText>
          </Card>
          <Card>
            <CardTitle>
              <SvgStyle
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                />
              </SvgStyle>
              Signature Brew
            </CardTitle>
            <CardText>
              Our drink can be brewed both hot or cold depending on preferences.
              However, our signature is the cold brew. With just 1-3 minutes of
              shaking in a bottle, it is ready to drink.
            </CardText>
          </Card>
        </TextSection>
        <Hero product={product} />
        <NewProducts newProducts={newProducts} />
        <SignupCTA />
        <Footer />
      </GalleryWrapper>
    </GalleryContainer>
  );
};
export default Gallery;
