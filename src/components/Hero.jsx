import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
    height: ${(props) => (props.isHome ? '60rem' : '50rem')};

    @media ${device.tabletS} {
      height: 27rem;
    }
  }
`;

const Hero = ({ isHome }) => (
  <HeroStyles className="hero-wrapper" isHome={isHome}>
    <HeroImage />
    <HeroText />
  </HeroStyles>
);

export default Hero;

Hero.propTypes = {
  isHome: PropTypes.bool,
};
