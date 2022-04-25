import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import CardWrapper from '../components/CardWrapper';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Seo from '../components/Seo';
import intro from '../content/intro.json';

export const query = graphql`
  query {
    file(name: { eq: "me" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <>
    <Seo isHome />
    <Hero />
    <CardWrapper
      alt="Screenshot of my latest project"
      id="about"
      isAbout
      isEven={false}
      src={data.file}
      text={intro.long}
      title="About Me"
      to="/portfolio/"
      value="Go to portfolio"
    />
    <Contact isHome />
  </>
);

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.object,
};
