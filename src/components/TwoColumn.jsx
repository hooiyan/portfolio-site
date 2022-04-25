import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import device from '../styles/Breakpoints';

const WrapperStyles = styled.section`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => (props.isProject ? '11.5rem 0 6.4rem 0' : '4.8rem 0')};
  width: 100%;

  @media ${device.tablet} {
    flex-direction: column;
    padding: ${(props) => (props.isProject ? '4rem 0 8.1rem 0' : '3.2rem 0')};
  }

  .title {
    margin-bottom: 2.4rem;
    text-transform: capitalize;
    width: 31.5%;

    @media ${device.tablet} {
      width: 100%;
    }
  }
`;

const TwoColumn = ({ isProject, children }) => (
  <WrapperStyles isProject={isProject}>{children}</WrapperStyles>
);

export default TwoColumn;

TwoColumn.propTypes = {
  isProject: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
