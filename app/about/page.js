'use client';

import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
`;

const About = () => {
  return (
    <>
      <Image src="/aboutus_img.png" alt="aboutus" />

      <hr></hr>

      <p>
        Gamers and frequent computer users often consume energy drinks,
        carbonated beverages, and functional drinks to stay alert and quench
        their thirst.
      </p>
      <p>
        By chance, I visited a tea plantation and came into contact with
        Taiwanese tea. As a passionate Gen Z consumer of functional beverages, I
        was immediately drawn to its pure and relaxing flavors. I wondered how I
        could replace energy drinks, which are filled with additives and
        burdensome for the body, while still maintaining the focus and energy I
        need.
      </p>

      <p>
        This led to the concept of developing an easy-to-brew, easy-to-drink,
        and easy-to-enjoy cold brew tea beverage.
      </p>

      <p>
        We carefully select Taiwan-grown tea leaves that are free from toxins
        and pesticides as a natural source of caffeine. We also add goji
        berries, which are rich in natural antioxidants, and use a unique tea
        extraction technique to create tea bags that can be easily brewed as
        cold brew.
      </p>

      <p>
        Our aim is to replace functional drinks with healthy and natural
        beverages. Whether you are an esports athlete, a gamer, or a heavy user
        of electronic devices, we want to provide you with a better drink
        option, allowing you to have a focused and enjoyable time during gaming
        or work.
      </p>
    </>
  );
};

export default About;
