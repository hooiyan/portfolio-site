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
      text="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interacticity, such as the testimonial slider."
      title="Manage"
      to="/portfolio/manage/"
      value="View Project"
    />
    <CardWrapper
      alt="screenshot of project 2"
      id="project2"
      isEven
      text="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interacticity, such as the features section."
      title="Bookmark"
      to="/portfolio/bookmark/"
      value="View Project"
    />
    <CardWrapper
      alt="screenshot of project 3"
      id="project3"
      text="This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation."
      title="Insure"
      to="/portfolio/insure/"
      value="View Project"
    />
    <CardWrapper
      alt="screenshot of project 4"
      id="project4"
      isEven
      text="This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes."
      title="Fylo"
      to="/portfolio/fylo/"
      value="View Project"
    />
    <Contact />
  </WrapperStyles>
);

export default PortfolioPage;
