import React from 'react';
import styled from 'styled-components';
import device from '../styles/Breakpoints';
import HeroImage from './HeroImage';
import HeroText from './HeroText';

const HeroWrapperStyles = styled.section`
  position: relative;

  .image-wrapper {
    @media ${device.laptop} {
      height: 60rem;
    }

    @media ${device.tabletS} {
      height: 27rem;
    }
  }
`;

const Hero = () => (
  <HeroWrapperStyles>
    <HeroImage />
    <HeroText />
  </HeroWrapperStyles>
);

export default Hero;

// https://source.unsplash.com/random
