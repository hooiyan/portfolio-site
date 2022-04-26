import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import device from '../styles/Breakpoints';
import Border from './Border';
import Button from './Button';
import Tag from './Tag';

const ProjectLeftStyles = styled.section`
  margin-bottom: 4rem;
  width: 31.5%;

  @media ${device.tablet} {
    width: 100%;
  }

  .wrapper {
    padding: 4.8rem 0;
  }

  .upper {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 4.4rem;
  }

  .lower {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .title {
    color: var(--color-primary-grayish-blue-hex);
    margin-bottom: 3rem;
    text-transform: capitalize;
  }

  .summary {
    color: var(--color-primary-grayish-blue-hex);
    font-size: var(--body-2-size);
    line-height: var(--body-line-height);
    margin-bottom: 2.4rem;
    opacity: 0.8;
  }
`;

const ProjectLeft = ({ githubLink, liveDemo, summary, tags, title }) => (
  <ProjectLeftStyles>
    <Border />
    <div className="wrapper">
      <h2 className="title">{title}</h2>
      <p className="summary">{summary}</p>
      <div className="upper">
        {tags.map((tag, index) => (
          <Tag key={index} text={tag} to={tag.toLowerCase()} />
        ))}
      </div>
      <div className="lower">
        <Button isExternal value="Visit Website" to={liveDemo} />
        <Button isExternal value="View Code" to={githubLink} />
      </div>
    </div>
    <Border />
  </ProjectLeftStyles>
);

export default ProjectLeft;

ProjectLeft.propTypes = {
  githubLink: PropTypes.string.isRequired,
  liveDemo: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};
