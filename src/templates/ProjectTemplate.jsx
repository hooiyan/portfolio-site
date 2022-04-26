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
          text="The main purpose of this project is to take advantages of the capabilities of Next.js and have a functional web app up and running quickly. Secondly, I want to become familiar with the framework itself and its convenient features."
        />
        <ProjectPart
          title="Web Stack and Explanation"
          text="I love using Next.js because it makes building apps a smoother experience for developers. I think writing inline CSS with HTML is convenient within components. Therefore, I chose to pair TailwindCSS - a utility-first CSS framework with Next.js for styling the user interfaces. The file-system based router built into Next.js allows me to create static and dynamic pages easily. Beside using the built-in API solution provided by Next.js, I also use SWR for client-side data fetching. The data population of this app is powered by TMDB API. Each technology in the stack has one thing in common, which is that they all have well-written documentations."
        />
        <ProjectPart
          title="Problem and Thought Process"
          text="Although this is not a particularly big project, I still think it is a good practice to have an organized project structure as well as reusable components that could be used in multiple places. This project got me thinking mostly about which method should I opt for fetching data from the API. Next.js provides different ways for data fetching depending on our needs. They do also suggest developers the ideal situation to use them. For me, I combined all of them in different parts of the application..
          "
        />
        <ProjectPart
          title="Lesson Learned"
          text={`I could not count how many lessons that I have learned from building this application. However, there are 3 most important lessons that I got out of it. Using useSWR to implement pagination in the search result pages and the "see more" pages. Be careful to not expose the secret keys that we store as environment variables. Initially, I fetched the data from the API directly on the client-side, I have exposed the API key to the client, I could see the key when I opened up the network tab in the dev tool. This is risky and should be avoided. Later on, I changed the method and fetch the data from the server side so that the secret key could be hidden from the user. Have a better understanding of the error Cannot read Property 'slice' of Undefined. Whenever we need to fetch the data from external API, we should make sure that the data exists before we use it in our application. Let say we want an array of movies to be rendered to the UI, but the data is not available yet. According to this article, we have various solution for this error. The one that I find easiest to understand is to provide an empty fallback value like so: const arr = data.slice(0, 10) || [].`}
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
