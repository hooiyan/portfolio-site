import React from 'react';
import styled from 'styled-components';
import device from '../styles/Breakpoints';
import HeroImage from './HeroImage';
import HeroText from './HeroText';

const HeroStyles = styled.section`
  margin-bottom: 15rem;
  position: relative;

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
  <HeroStyles className="hero-wrapper">
    <HeroImage />
    <HeroText />
  </HeroStyles>
);

export default Hero;
