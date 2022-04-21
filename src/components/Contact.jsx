import React from 'react';
import styled from 'styled-components';
import device from '../styles/Breakpoints';
import Button from './Button';

const WrapperStyles = styled.section`
  display: flex;
  column-gap: 3.2rem;
  align-items: center;
  margin-top: 7rem;

  @media (max-width: 762px) {
    flex-direction: column;
    margin-top: 9.6rem;
  }

  .title {
    color: var(--color-primary-grayish-blue-hex);
    letter-spacing: var(--h2-letter-spacing);
    line-height: var(--h2-line-height);

    @media (max-width: 762px) {
      margin-bottom: 4rem;
      text-align: center;
    }
  }

  .line {
    border-top: 1px solid rgba(32, 58, 76, 0.15);
    border-bottom: none;
    border-right: none;
    border-left: none;
    width: 90%;

    @media ${device.laptopM} {
      width: 80%;
    }

    @media ${device.laptop} {
      width: 45%;
    }

    @media ${device.tablet} {
      width: 30%;
    }
  }
`;

const Contact = () => (
  <WrapperStyles className="contact-wrapper">
    <h2 className="title">Interested in doing a project together?</h2>
    <div className="line" />
    <Button to="/contact/" value="Contact Me" />
  </WrapperStyles>
);

export default Contact;
