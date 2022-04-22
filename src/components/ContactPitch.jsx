import React from 'react';
import styled from 'styled-components';
import Intro from '../content/intro.json';
import device from '../styles/Breakpoints';
import SocialNetwork from './SocialNetwork';

const WrapperStyles = styled.section`
  width: var(--right-column-initial-width);

  @media ${device.laptopS} {
    width: var(--right-column-second-width);
  }

  @media ${device.tablet} {
    width: var(--right-column-final-width);
  }

  p {
    color: var(--color-primary-grayish-blue-hex);
    opacity: 0.8;
    margin-bottom: 2.4rem;
  }
`;

const ContactPitch = () => (
  <WrapperStyles>
    <p>{Intro.contact}</p>
    <SocialNetwork fill="var(--color-primary-grayish-blue-hex)" />
  </WrapperStyles>
);

export default ContactPitch;
