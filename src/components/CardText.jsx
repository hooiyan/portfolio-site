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
  width: 34.5%;
  height: 50rem;

  @media ${device.laptopM} {
    margin-left: 10rem;
  }

  @media ${device.laptopS} {
    margin-left: 8rem;
  }

  @media ${device.tablet} {
    width: 50%;
    margin-left: 4rem;
  }

  @media (max-width: 762px) {
    width: 100%;
    margin-top: 3.2rem;
    margin-left: 0;
  }

  .card-title {
    margin-bottom: 2.8rem;
    text-transform: capitalize;
  }

  .card-text {
    margin-bottom: 2.4rem;
    opacity: 0.8;
  }
`;

const CardText = ({ isEven, text, title, to, value }) => (
  <WrapperStyles className="card-text-wrapper" isEven={isEven}>
    <Border top />
    <div>
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{text}</p>
      <Button to={to} value={value} />
    </div>
    <Border bottom />
  </WrapperStyles>
);

export default CardText;

CardText.propTypes = {
  isEven: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
