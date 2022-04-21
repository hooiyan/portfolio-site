import React from 'react';
import styled from 'styled-components';
import CardWrapper from '../components/CardWrapper';
import Contact from '../components/Contact';

const WrapperStyles = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 8rem;
  margin-top: 4rem;
`;

const PortfolioPage = () => (
  <WrapperStyles>
    <CardWrapper
      alt="screenshot of project 1"
      id="project1"
      isEven={false}
      text="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interacticity, such as the testimonial slider. "
      title="Manage"
      to="/portfolio/manage/"
      value="View Project"
    />
    <CardWrapper
      alt="screenshot of project 1"
      id="project1"
      isEven
      text="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interacticity, such as the testimonial slider."
      title="Manage"
      to="/portfolio/manage/"
      value="View Project"
    />
    <CardWrapper
      alt="screenshot of project 1"
      id="project1"
      isEven={false}
      text="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interacticity, such as the testimonial slider. "
      title="Manage"
      to="/portfolio/manage/"
      value="View Project"
    />
    <CardWrapper
      alt="screenshot of project 1"
      id="project1"
      isEven
      text="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interacticity, such as the testimonial slider."
      title="Manage"
      to="/portfolio/manage/"
      value="View Project"
    />
    <Contact />
  </WrapperStyles>
);

export default PortfolioPage;
