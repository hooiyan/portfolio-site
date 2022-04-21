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

  @media ${device.laptopM} {
    width: 100%;
  }

  @media ${device.tabletM} {
    flex-direction: column;
  }

  .image-wrapper {
    width: 53.2%;
    height: ${(props) => (props.isAbout ? '60rem' : '50rem')};

    @media ${device.laptopM} {
      width: 45%;
    }

    @media ${device.laptopS} {
      height: ${(props) => (props.isAbout ? '60rem' : '40rem')};
    }

    @media ${device.tablet} {
      height: ${(props) => (props.isAbout ? '60rem' : '31.4rem')};
      width: ${(props) => (props.isAbout ? '42%' : '60%')};
    }

    @media ${device.tabletM} {
      height: ${(props) => (props.isAbout ? '40rem' : '28.8rem')};
      justify-content: flex-start;
      width: 100%;
    }

    @media ${device.tabletS} {
      height: ${(props) => (props.isAbout ? '34.6rem' : '28.8rem')};
    }
  }
`;

const CardWrapper = ({
  alt,
  id,
  isAbout,
  isEven = false,
  text,
  title,
  to,
  value,
}) => (
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
  isEven: PropTypes.bool,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
