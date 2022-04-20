import React from 'react';
import styled from 'styled-components';
import device from '../styles/Breakpoints';
import Button from './Button';

const WrapperStyles = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15rem;

  @media (max-width: 762px) {
    flex-direction: column;
    margin-top: 9.6rem;
  }

  .title {
    color: var(--color-primary-grayish-blue-hex);

    @media (max-width: 762px) {
      margin-bottom: 4rem;
      text-align: center;
    }
  }

  .line {
    border-top: 1px solid rgba(32, 58, 76, 0.15);
    border-bottom-width: 0;
    border-right-width: 0;
    border-left-width: 0;
    height: 1px;
    margin: 0 3.2rem;
    width: 100%;

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
    <hr className="line" />
    <Button to="/contact/" value="Contact Me" />
  </WrapperStyles>
);

export default Contact;
