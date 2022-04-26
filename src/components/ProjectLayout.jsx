import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import device from '../styles/Breakpoints';
import Contact from './Contact';
import HeroImage from './HeroImage';
import MDXComponents from './MDXComponents';
import ProjectLeft from './ProjectLeft';
import ProjectNavigation from './ProjectNavigation';
import ProjectRight from './ProjectRight';
import Seo from './Seo';
import TwoColumn from './TwoColumn';

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

const ProjectPageLayout = ({ data: { mdx }, pageContext }) => (
  <ProjectLayoutStyles className="single-project-wrapper">
    {console.log(pageContext)}
    <Seo />
    <HeroImage />
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

export default ProjectPageLayout;

export const pageQuery = graphql`
  query PortfolioQuery($id: String) {
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

ProjectPageLayout.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};
