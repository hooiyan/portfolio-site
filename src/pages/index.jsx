import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import CardWrapper from '../components/CardWrapper';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Intro from '../content/intro.json';

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
    <Hero />
    <CardWrapper
      alt="screenshot of project 1"
      id="about"
      isAbout
      isEven={false}
      src={data.file}
      text={Intro.long}
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
