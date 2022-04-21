import React from 'react';
import styled from 'styled-components';
import CardWrapper from './CardWrapper';
import ProjectImage from './ProjectImage';
import ProjectText from './ProjectText';

const WrapperStyles = styled.section`
  display: flex;
  justify-content: space-between;
  width: 90%;

  .image-wrapper {
    width: 50%;
  }
`;

const Project = () => (
  <CardWrapper
    alt="screenshot of project 1"
    id="project1"
    src="https://source.unsplash.com/random"
    text="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interacticity, such as the testimonial slider."
    title="Manage"
    to="/portfolio/manage/"
    value="View Project"
  />
);

export default Project;
