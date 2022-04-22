import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import device from '../styles/Breakpoints';

const WrapperStyles = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 4.8rem 0;
  width: 100%;

  @media ${device.tablet} {
    flex-direction: column;
  }

  h2 {
    margin-bottom: 2.4rem;
    text-transform: capitalize;
    width: 31.5%;

    @media ${device.tablet} {
      width: 100%;
    }
  }
`;

const TwoColumn = ({ children, title }) => (
  <WrapperStyles>
    <h2>{title}</h2>
    {children}
  </WrapperStyles>
);

export default TwoColumn;

TwoColumn.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
