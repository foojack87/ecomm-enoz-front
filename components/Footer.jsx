'use client';

import styled from 'styled-components';
import Center from './Center';
import Image from 'next/image';

const SocialIcons = styled.svg`
  color: #f49a2a;
  width: 1.4rem;
  height: 1.4rem;
`;

const SocialsColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContactColumn = styled.div`
  text-decoration: none;
`;

const Email = styled.a`
  text-decoration: none;
  color: #aaa;
`;

const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.2rem;
  padding: 2rem 0;
  font-size: 0.8rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1.5fr;
  }
`;

const SocialsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const FooterContainer = styled.div`
  padding: 2rem 0;
`;

const FooterBottomContent = styled.div`
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterBottomLinks = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 1rem;
  }
`;

const Footer = () => {
  return (
    <Center>
      <FooterContainer>
        <hr></hr>
        <div>
          <Columns>
            <ContactColumn>
              <address>
                <p>
                  1309 Coffeen Avenue STE 1200 Sheridan, WY 82801 United States
                </p>
                <br />
                <div>
                  <Email href="mailto:service@enozdrink.com">
                    service@enozdrink.com
                  </Email>
                </div>
              </address>
            </ContactColumn>
            <ContactColumn>
              <address>
                <p>
                  Yours Enterprise Co.,Ltd.
                  <br />
                  477 Tiding Blvd Sec.2 2Fl, 114 Neihu, Taipei, TW
                </p>
              </address>
            </ContactColumn>
            <ContactColumn>
              <address>
                <p>
                  佑廸實業有限公司
                  <br />
                  台北巿內湖區堤頂大道二段477號2樓
                </p>
                <br />
                <p>客服專線: 0800-666-389</p>
              </address>
            </ContactColumn>
            <SocialsColumn>
              <h4>
                <Image
                  src="/enoz logo.png"
                  width={150}
                  height={50}
                  alt="brand logo"
                />
              </h4>
              <SocialsWrapper>
                <p>
                  <a>
                    <SocialIcons
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                    >
                      <title>Logo Twitter</title>
                      <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path>
                    </SocialIcons>
                  </a>
                </p>
                <p>
                  <a>
                    <SocialIcons
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                    >
                      <title>Logo Instagram</title>
                      <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path>
                      <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path>
                    </SocialIcons>
                  </a>
                </p>
                <p>
                  <a>
                    <SocialIcons
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                    >
                      <title>Logo Facebook</title>
                      <path
                        d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                        fillRule="evenodd"
                      ></path>
                    </SocialIcons>
                  </a>
                </p>
              </SocialsWrapper>
            </SocialsColumn>
          </Columns>
        </div>

        <hr></hr>

        <FooterBottomContent>
          <div>
            <p>
              Copyright &copy; <span>{new Date().getFullYear()}</span> by Enoz
              Inc. All rights reserved
            </p>
          </div>
          <FooterBottomLinks>
            <p>Terms & Conditions</p>
            <p>Privacy</p>
            <p>Shipping & Returns</p>
          </FooterBottomLinks>
        </FooterBottomContent>
      </FooterContainer>
    </Center>
  );
};

export default Footer;
