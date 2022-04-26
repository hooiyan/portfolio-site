import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Contact from '../components/Contact';
import HeroImage from '../components/HeroImage';
import ProjectLeft from '../components/ProjectLeft';
import ProjectNavigation from '../components/ProjectNavigation';
import ProjectPart from '../components/ProjectPart';
import ProjectRight from '../components/ProjectRight';
import Seo from '../components/Seo';
import TwoColumn from '../components/TwoColumn';
import device from '../styles/Breakpoints';
import { capitalize } from '../utils';

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

const ProjectTemplate = ({ pageContext: { project } }) => (
  <ProjectTemplateStyles className="single-project-wrapper">
    <Seo title={capitalize(project.slug)} />
    <HeroImage />
    <TwoColumn isProject>
      <ProjectLeft />
      <ProjectRight>
        <ProjectPart
          title="Project Purpose and Goal"
          text="This project included 3 phases and iterations of the site. Phase 1 simply allowed users to enter their email to be alerted to when the product was released. Phase 2 was quite larger and is designed to introduce users to the Coffee By Benjamin product and answer any questions they may have. Phase three is by far the largest and most complex, as it includes the full shop and cart pages as well as the logic and backend that goes along with it."
        />
        <ProjectPart
          title="Web Stack and Explanation"
          text="React made the most sense for the web application because it required to connect to graphQL and the Shopify-SDK for javascript ties into React very smoothly. The Shopify-Buy-SDK was chosen because of the ability for the client to modify the products without any complex coding knowledge."
        />
        <ProjectPart
          title="Problem and Thought Process"
          text="Like most projects, I ran into a few bumps along the way, one particularly difficult area was organization and structure of the code. Because of this project's size, I realized how important maintaining an organized structure would be.
          "
        />
        <ProjectPart
          title="Lesson Learned"
          text="I could spend all day describing the lessons that I learned while working on this project, but the most important ones involved my newfound understanding of React Hooks, Git management, Feature Keys, and API integration. As my first large project using React, I learned a lot of lessons regarding code structure and organization. When I first began, I would write sloppy code and move on, but now I know how doing so can come back to bite you; I now spend a lot more time refactoring and improving every line I code I write, for the best readability and far fewer headaches."
        />
        <ProjectPart
          title="Future Improvements"
          text="I still have a few features I would love to implement with this project. I'd really like to update the background images so that they display based on what the weather status currently is, so that the application has the feel of the weather they're currently experiencing. I also have plans to create secondary zip-codes, so the user can click back and forth between two locations and compare the weather."
        />
      </ProjectRight>
    </TwoColumn>
    <ProjectNavigation />
    <Contact />
  </ProjectTemplateStyles>
);

export default ProjectTemplate;

ProjectTemplate.propTypes = {
  pageContext: PropTypes.object,
};
