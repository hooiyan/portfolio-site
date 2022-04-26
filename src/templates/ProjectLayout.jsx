import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import device from '../styles/Breakpoints';
import Contact from '../components/Contact';
import HeroImage from '../components/HeroImage';
import MDXComponents from '../components/MDXComponents';
import ProjectLeft from '../components/ProjectLeft';
import ProjectNavigation from '../components/ProjectNavigation';
import ProjectRight from '../components/ProjectRight';
import Seo from '../components/Seo';
import TwoColumn from '../components/TwoColumn';

const ProjectLayoutStyles = styled.section`
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

const ProjectLayout = ({ data: { mdx }, pageContext }) => (
  <ProjectLayoutStyles className="single-project-wrapper">
    <Seo />
    <HeroImage isProject src={mdx.frontmatter.hero} />
    <TwoColumn isProject>
      <ProjectLeft
        githubLink={mdx.frontmatter.githubLink}
        liveDemo={mdx.frontmatter.liveDemo}
        summary={mdx.frontmatter.summary}
        tags={mdx.frontmatter.tags}
        title={mdx.frontmatter.title}
      />
      <ProjectRight>
        <MDXComponents>
          <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
        </MDXComponents>
      </ProjectRight>
    </TwoColumn>
    <ProjectNavigation />
    <Contact />
  </ProjectLayoutStyles>
);

export default ProjectLayout;

export const pageQuery = graphql`
  query ProjectQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        githubLink
        liveDemo
        summary
        tags
        title
        hero {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
`;

ProjectLayout.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};
