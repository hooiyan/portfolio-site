import { MDXProvider } from '@mdx-js/react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import device from '../styles/Breakpoints';
import Contact from './Contact';
import HeroImage from './HeroImage';
import ProjectLeft from './ProjectLeft';
import ProjectNavigation from './ProjectNavigation';
import ProjectRight from './ProjectRight';
import Seo from './Seo';
import TwoColumn from './TwoColumn';

const ProjectTemplateStyles = styled.section`
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

const shortcodes = { Link }; // Provide common components here

const ProjectPageLayout = ({ data: { mdx } }) => (
  <ProjectTemplateStyles className="single-project-wrapper">
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
        <MDXProvider components={shortcodes}>
          <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </ProjectRight>
    </TwoColumn>
    <ProjectNavigation />
    <Contact />
  </ProjectTemplateStyles>
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
};
