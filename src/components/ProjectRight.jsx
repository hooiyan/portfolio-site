import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import device from '../styles/Breakpoints';

const ProjectRightStyles = styled.section`
  width: var(--right-column-initial-width);

  @media ${device.laptopS} {
    width: calc(var(--right-column-second-width) - 5%);
  }

  @media ${device.tablet} {
    width: var(--right-column-final-width);
  }
`;

const ProjectRight = ({ children }) => (
  <ProjectRightStyles>{children}</ProjectRightStyles>
);

export default ProjectRight;

ProjectRight.propTypes = {
  children: PropTypes.node.isRequired,
};
