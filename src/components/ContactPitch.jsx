import React from 'react';
import styled from 'styled-components';
import intro from '../content/intro.json';
import device from '../styles/Breakpoints';
import SocialNetwork from './SocialNetwork';

const ContactPitchStyles = styled.section`
  width: var(--right-column-initial-width);

  @media ${device.laptopS} {
    width: var(--right-column-second-width);
  }

  @media ${device.tablet} {
    width: var(--right-column-final-width);
  }

  p {
    color: var(--color-primary-grayish-blue-hex);
    margin-bottom: 2.4rem;
    opacity: 0.8;
  }
`;

const ContactPitch = () => (
  <ContactPitchStyles>
    <p>{intro.contact}</p>
    <SocialNetwork fill="var(--color-primary-grayish-blue-hex)" />
  </ContactPitchStyles>
);

export default ContactPitch;
