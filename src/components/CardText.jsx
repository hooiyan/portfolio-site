import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import device from '../styles/Breakpoints';
import Button from './Button';
import Border from './Border';

const WrapperStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--color-primary-grayish-blue-hex);
  margin-left: ${(props) => (props.isEven ? '0' : '12.5rem')};
  margin-right: ${(props) => (props.isEven ? '12.5rem' : '0')};
  width: ${(props) => (props.isAbout ? '34.5%' : '34.5%')};
  height: ${(props) => (props.isAbout ? '60rem' : '50rem')};

  @media ${device.laptopM} {
    margin-left: ${(props) => (props.isEven ? '0' : '8.5rem')};
    margin-right: ${(props) => (props.isEven ? '8.5rem' : '0')};
    width: ${(props) => (props.isAbout ? '50%' : '50%')};
  }

  @media ${device.tablet} {
    height: ${(props) => (!props.isAbout ? '41.8rem' : '60rem')};
    margin-left: ${(props) => (props.isEven ? '0' : '6.9rem')};
    margin-right: ${(props) => (props.isEven ? '6.9rem' : '0')};
  }

  @media ${device.tabletM} {
    margin-top: 3.2rem;
    margin-left: 0;
    margin-right: 0;
    height: fit-content;
    width: 100%;
  }

  .card-title {
    margin-bottom: 2.8rem;
    text-transform: capitalize;
  }

  .card-text {
    margin-bottom: 2.4rem;
    opacity: 0.8;
  }

  .details {
    padding: 3.2rem 0 3.9rem 0;
  }
`;

const CardText = ({ isAbout, isEven = false, text, title, to, value }) => (
  <WrapperStyles
    className="card-text-wrapper"
    isAbout={isAbout}
    isEven={isEven}
  >
    <Border top />
    <div className="details">
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{text}</p>
      <Button to={to} value={value} />
    </div>
    <Border bottom />
  </WrapperStyles>
);

export default CardText;

CardText.propTypes = {
  isAbout: PropTypes.bool,
  isEven: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
