import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeroImage from '../components/HeroImage';
import device from '../styles/Breakpoints';
import Contact from '../components/Contact';

const WrapperStyles = styled.section`
  .image-wrapper {
    height: 50rem;

    @media ${device.tablet} {
      height: 31rem;
    }

    @media ${device.mobileL} {
      height: 14rem;
    }
  }
`;

const ProjectTemplate = ({ pageContext: { dog } }) => (
  <WrapperStyles className="single-project-wrapper">
    <HeroImage />
    {dog.name} - {dog.breed}
    <Contact />
  </WrapperStyles>
);

export default ProjectTemplate;

ProjectTemplate.propTypes = {
  pageContext: PropTypes.object,
};
