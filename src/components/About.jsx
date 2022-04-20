import React from 'react';
import styled from 'styled-components';
import AboutImage from './AboutImage';
import AboutText from './AboutText';
import device from '../styles/Breakpoints';

const WrapperStyles = styled.section`
  display: flex;
  width: 90%;

  @media ${device.laptopS} {
    width: 95%;
  }

  @media ${device.laptop} {
    width: 100%;
  }

  @media (max-width: 762px) {
    flex-direction: column;
  }

  .image-wrapper {
    width: 50%;
    height: 60rem;

    @media ${device.laptopS} {
      width: 38%;
    }

    @media ${device.tablet} {
      width: 40%;
    }

    @media (max-width: 762px) {
      width: 100%;
    }

    @media ${device.tabletS} {
      height: 34.6rem;
    }
  }
`;

const About = () => (
  <WrapperStyles id="about" className="about-wrapper">
    <AboutImage />
    <AboutText />
  </WrapperStyles>
);

export default About;
