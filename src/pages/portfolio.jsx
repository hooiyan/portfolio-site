import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import CardWrapper from '../components/CardWrapper';
import Contact from '../components/Contact';
import Seo from '../components/Seo';
import portfolio from '../content/portfolio.json';

export const query = graphql`
  query {
    entertainment: file(name: { eq: "entertainment" }) {
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

const PortfolioPageStyles = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 8rem;
  margin-top: 4rem;
`;

const PortfolioPage = ({ data }) => (
  <PortfolioPageStyles>
    <Seo title="Portfolio" />
    {/* {portfolio.map({alt, demo, description, id, image, slug, title}) =>  */}
    {portfolio.map(({ alt, description, id, image, slug, title }) => (
      <CardWrapper
        alt={alt}
        id={id}
        isEven={id % 2 === 0}
        src={data.entertainment}
        text={description}
        title={title}
        to={`/portfolio/${slug}`}
        value="View Project"
      />
    ))}
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
      src={data.entertainment}
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
  </PortfolioPageStyles>
);

export default PortfolioPage;

PortfolioPage.propTypes = {
  data: PropTypes.object,
};
