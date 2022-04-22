import React from 'react';
import styled from 'styled-components';
import device from '../styles/Breakpoints';
import HeroImage from './HeroImage';
import HeroText from './HeroText';

const HeroWrapperStyles = styled.section`
  position: relative;
  margin-bottom: 15rem;

  @media ${device.tablet} {
    margin-bottom: 9.6rem;
  }

  .image-wrapper {
    height: 50rem;

    @media ${device.tabletS} {
      height: 27rem;
    }
  }
`;

const Hero = () => (
  <HeroWrapperStyles className="hero-wrapper">
    <HeroImage />
    <HeroText />
  </HeroWrapperStyles>
);

export default Hero;
