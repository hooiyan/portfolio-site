import React from 'react';
import styled from 'styled-components';
import device from '../styles/Breakpoints';
import ButtonIcon from './ButtonIcon';
import intro from '../content/intro.json';

const WrapperStyles = styled.section`
  background-color: rgba(234, 234, 235, 0.8);
  border: none;
  padding-top: 5.6rem;
  padding-right: 3rem;
  width: 48rem;
  position: absolute;
  bottom: 0;

  @media ${device.tabletS} {
    background-color: var(--color-secondary-very-light-gray-hex);
    padding-top: 2.4rem;
    padding-right: 0;
    width: auto;
    position: static;
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
  <WrapperStyles className="hero-text-wrapper">
    <h1 className="hero-introduction">{intro.short}</h1>
    <ButtonIcon />
  </WrapperStyles>
);

export default HeroText;
