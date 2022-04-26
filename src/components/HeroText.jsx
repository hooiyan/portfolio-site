import React from 'react';
import styled from 'styled-components';
import device from '../styles/Breakpoints';
import ButtonIcon from './ButtonIcon';
import intro from '../content/intro.json';

const HeroTextStyles = styled.section`
  background-color: var(--color-secondary-very-light-gray-hex);
  /* background-color: rgba(234, 234, 235, 0.8); */
  border: none;
  padding-top: 5.6rem;
  padding-right: 3rem;
  position: absolute;
  bottom: 0;
  width: 48rem;

  @media ${device.tabletS} {
    background-color: var(--color-secondary-very-light-gray-hex);
    padding-top: 2.4rem;
    padding-right: 0;
    position: static;
    width: auto;
  }

  .hero-introduction {
    color: var(--color-primary-grayish-blue-hex);
    letter-spacing: var(--h1-letter-spacing);
    line-height: var(--h1-line-height);
    margin-bottom: 5.3rem;

    @media ${device.tablet} {
      font-size: var(--h2-size);
      letter-spacing: var(--h2-letter-spacing);
      line-height: var(--h2-line-height);
      margin-right: 3.2rem;
      margin-bottom: 4.8rem;
    }

    @media ${device.tabletS} {
      margin-bottom: 3.2rem;
      margin-right: 0;
    }
  }
`;

const HeroText = () => (
  <HeroTextStyles className="hero-text-wrapper">
    <h1 className="hero-introduction">{intro.short}</h1>
    <ButtonIcon />
  </HeroTextStyles>
);

export default HeroText;
