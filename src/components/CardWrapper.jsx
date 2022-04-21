import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import device from '../styles/Breakpoints';
import CardImage from './CardImage';
import CardText from './CardText';

const WrapperStyles = styled.section`
  display: flex;
  align-items: center;
  align-self: ${(props) => (props.isEven ? 'flex-end' : null)};
  flex-direction: ${(props) => (props.isEven ? 'row-reverse' : 'row')};
  width: 91.36%;

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
    width: 53.2%;
    height: 50rem;
    height: ${(props) => (props.isAbout ? '60rem' : '50rem')};

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

const CardWrapper = ({ alt, id, isAbout, isEven, text, title, to, value }) => (
  <WrapperStyles
    id={id}
    className="card-wrapper"
    isAbout={isAbout}
    isEven={isEven}
  >
    <CardImage alt={alt} />
    <CardText
      isAbout={isAbout}
      isEven={isEven}
      text={text}
      title={title}
      to={to}
      value={value}
    />
  </WrapperStyles>
);

export default CardWrapper;

CardWrapper.propTypes = {
  alt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isAbout: PropTypes.bool,
  isEven: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
