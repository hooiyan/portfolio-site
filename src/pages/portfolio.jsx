import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import CardWrapper from '../components/CardWrapper';
import Contact from '../components/Contact';
import Seo from '../components/Seo';

export const query = graphql`
  query {
    bookmark: file(name: { eq: "bookmark" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
    fylo: file(name: { eq: "fylo" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
    manage: file(name: { eq: "manage" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
    insure: file(name: { eq: "insure" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
  }
`;

const WrapperStyles = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 8rem;
  margin-top: 4rem;
`;

const PortfolioPage = ({ data }) => (
  <WrapperStyles>
    <Seo title="Portfolio" />
    <CardWrapper
      alt="screenshot of project 1"
      id="project1"
      isEven={false}
      src={data.manage}
      text="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interacticity, such as the testimonial slider."
      title="Manage"
      to="/portfolio/entertainment/"
      value="View Project"
    />
    <CardWrapper
      alt="screenshot of project 1"
      id="project1"
      isEven
      src={data.bookmark}
      text="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interacticity, such as the testimonial slider."
      title="Bookmark"
      to="/portfolio/Fido/"
      value="View Project"
    />
    <CardWrapper
      alt="screenshot of project 1"
      id="project1"
      isEven={false}
      src={data.insure}
      text="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interacticity, such as the testimonial slider."
      title="Insure"
      to="/portfolio/Fido/"
      value="View Project"
    />
    <CardWrapper
      alt="screenshot of project 1"
      id="project1"
      isEven
      src={data.fylo}
      text="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interacticity, such as the testimonial slider."
      title="Fylo"
      to="/portfolio/Fido/"
      value="View Project"
    />
    <Contact />
  </WrapperStyles>
);

export default PortfolioPage;

PortfolioPage.propTypes = {
  data: PropTypes.object,
};
