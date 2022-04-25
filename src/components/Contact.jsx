import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import device from '../styles/Breakpoints';
import Button from './Button';

const ContactWrapperStyles = styled.section`
  display: flex;
  align-items: center;
  column-gap: 3.2rem;
  margin-top: ${(props) => (props.isHome ? '15rem' : '7rem')};

  @media ${device.tablet} {
    margin-top: ${(props) => (props.isHome ? '9.6rem' : '1.6rem')};
  }

  @media ${device.tabletM} {
    flex-direction: column;
    margin-top: ${(props) => (props.isHome ? '8rem' : '0')};
  }

  .title {
    color: var(--color-primary-grayish-blue-hex);
    letter-spacing: var(--h2-letter-spacing);
    line-height: var(--h2-line-height);

    @media ${device.tabletM} {
      margin-bottom: 4rem;
      text-align: center;
    }
  }

  .line {
    border-top: 1px solid rgba(32, 58, 76, 0.15);
    border-right: none;
    border-bottom: none;
    border-left: none;
    width: 90%;

    @media ${device.laptopS} {
      width: 80%;
    }

    @media ${device.laptop} {
      width: 45%;
    }

    @media ${device.tablet} {
      width: 30%;
    }

    @media ${device.tabletM} {
      display: none;
    }
  }
`;

const Contact = ({ isHome }) => (
  <ContactWrapperStyles className="contact-wrapper" isHome={isHome}>
    <h2 className="title">Interested in doing a project together?</h2>
    <div className="line" />
    <Button isDark={false} to="/contact/" value="Contact Me" />
  </ContactWrapperStyles>
);

export default Contact;

Contact.propTypes = {
  isHome: PropTypes.bool,
};
