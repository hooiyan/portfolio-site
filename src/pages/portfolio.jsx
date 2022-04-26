import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import CardWrapper from '../components/CardWrapper';
import Contact from '../components/Contact';
import Seo from '../components/Seo';
import p from '../content/portfolio.json';

export const query = graphql`
  query {
    entertainment: file(name: { eq: "entertainment" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
    todo: file(name: { eq: "todo" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
    advice: file(name: { eq: "advice" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
    typemaster: file(name: { eq: "typemaster" }) {
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

const PortfolioPage = ({ data }) => {
  const { entertainment, todo, advice, typemaster } = data;

  return (
    <PortfolioPageStyles>
      <Seo title="Portfolio" />
      <CardWrapper
        alt={p[0].alt}
        id={p[0].id}
        isEven={p[0].id % 2 === 0}
        src={entertainment}
        text={p[0].description}
        title={p[0].title}
        to={`/portfolio/${p[0].slug}`}
        value="View Project"
      />
      <CardWrapper
        alt={p[1].alt}
        id={p[1].id}
        isEven={p[1].id % 2 === 0}
        src={todo}
        text={p[1].description}
        title={p[1].title}
        to={`/portfolio/${p[1].slug}`}
        value="View Project"
      />
      <CardWrapper
        alt={p[2].alt}
        id={p[2].id}
        isEven={p[2].id % 2 === 0}
        src={advice}
        text={p[2].description}
        title={p[2].title}
        to={`/portfolio/${p[2].slug}`}
        value="View Project"
      />
      <CardWrapper
        alt={p[3].alt}
        id={p[3].id}
        isEven={p[3].id % 2 === 0}
        src={typemaster}
        text={p[3].description}
        title={p[3].title}
        to={`/portfolio/${p[3].slug}`}
        value="View Project"
      />
      <Contact />
    </PortfolioPageStyles>
  );
};

export default PortfolioPage;

PortfolioPage.propTypes = {
  data: PropTypes.object,
};
